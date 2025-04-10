ENTITY: Account, 1.0.0, "Financial Account"

COLLECTIONS:
  types: ENUM STR
    savings = "Savings"
    checking = "Checking"
    credit = "Credit"

  currencies: ARRAY<STR> = ["USD", "EUR", "GBP"]

PROPERTIES:
  id:
    type        : INT
    required    : true
    auto        : true
    primary_key : true
    readonly    : true

  account_number:
    type        : STR
    required    : true
    unique      : true

  name:
    type        : STR
    required    : true
    max_length  : 100

  type:
    type        : ENUM types
    required    : true

  balance:
    type        : DECIMAL
    default     : 0.00
    readonly    : true

  currency:
    type        : STR
    in          : currencies
    default     : "USD"

  active:
    type        : BOOL
    default     : true

  owner_id:
    type        : INT
    ref         : Person.id
    required    : true

  created_at:
    type        : DATETIME
    default     : NOW
    readonly    : true

TRIGGERS:
  on_deactivate:
    IF active IS FALSE
    THEN SET name TO CONCAT(name, " [Closed]")

GUARDS:
  prevent_update_if_inactive:
    ON UPDATE
    IF active IS FALSE AND NOT (active CHANGES)
    THEN BLOCK WITH "Cannot modify closed accounts"

  prevent_delete_with_balance:
    ON DELETE
    IF balance > 0
    THEN BLOCK WITH "Cannot delete account with non-zero balance"

SIDE_EFFECTS:
  ON DELETE:
    FOR Transaction WHERE account_id == THIS
    SET account_id TO NULL


ENTITY: Transaction, 1.0.0, "Account Transaction"

PROPERTIES:
  id:
    type        : INT
    required    : true
    auto        : true
    primary_key : true

  account_id:
    type        : INT
    ref         : Account.id
    required    : true

  date:
    type        : DATETIME
    required    : true

  description:
    type        : STR
    required    : true

  amount:
    type        : DECIMAL
    required    : true

  type:
    type        : STR
    required    : true
    values      : ["credit", "debit"]

  created_by:
    type        : STR
    required    : true