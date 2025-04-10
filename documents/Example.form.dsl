ENTITY: Account, 1.0.0, "Account Form"

PARAMETERS:
  account: Account
  transactions: COLLECTION OF Transaction = EMPTY
  canEdit: BOOL = true
  loadTransactions: FUNC

STATE:
  account: @@account
  transactions: @@transactions
  context: PermissionContext

CONDITIONS:
  isAdmin: @context.role = "admin"
  isSavings: @account.type = "savings"
  canDelete: @account.balance = 0
  hasTransactions: LENGTH OF @transactions > 0
  isInactive: @account.active = false

TEMPLATES:
  transaction_row:
    PARAMETERS:
      tx: Transaction
      canRemove: BOOL = false

    STATE:
      rowId: CONCAT("tx-", @tx.id)
      buttonId: CONCAT("remove-", @tx.id)

    LAYOUT:
      HORIZONTAL_STACK gap=2:
        DIV: content: @tx.date
        DIV: content: @tx.description
        DIV: content: @tx.amount
        DIV: content: @tx.type
        BUTTON:
          id: @buttonId
          label: "Remove"

    VIEW_LOGIC:
      #@buttonId:
        hidden: NOT canRemove

    ACTIONS:
      #@buttonId:
        on: click
        call: @context.removeTransaction
        with:
          id: @tx.id

  empty_tx_list:
    LAYOUT:
      DIV: content: "No transactions available"

  account_card:
    PARAMETERS:
      title: STR

    LAYOUT:
      DIV:
        class: "card"

        HEADER: content: @title

        SLOT: content

        SLOT: actions
          WHEN canEdit?

LAYOUT:
  ~account_card:
    title: "Account Details"

    IN SLOT content:
      HORIZONTAL_GRID gap=2:
        COLUMN width=50%:
          @account.account_number
          @account.name

        COLUMN width=50%:
          @account.type
          @account.currency

      @account.owner_id
      @account.active

    IN SLOT actions:
      BUTTON:
        id: "closeBtn"
        label: "Close Account"

  IF @account.active:
    ASYNC:
      loader: @loadTransactions
      target: @transactions

      FOR @transactions AS tx:
        ~transaction_row:
          tx: tx
          canRemove: isAdmin?

  ELSE IF isInactive?:
    ~empty_tx_list

  ELSE:
    DIV: content: "Account not found or inaccessible."

VIEW_LOGIC:
  #closeBtn:
    hidden: NOT canEdit?
    tooltip:
      WHEN isInactive? THEN: "Account already closed"
      ELSE: "Click to close account"

  @account.name:
    readonly: NOT canEdit?

STYLE:
  #closeBtn:
    class:
      WHEN isInactive? THEN: "btn-disabled"
      ELSE: "btn-warning"

  @account.name:
    background: VAR(cl-input-bg)

ACTIONS:
  #closeBtn:
    on: click
    call: context.closeAccount
    with:
      id: @account.id
