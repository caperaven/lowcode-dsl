├── src/
│
│   ├── core/                 # Generic parsing engine pieces
│   │   ├── parser.js
│   │   ├── line-walker.js
│   │   ├── parser-context.js
│   │   ├── parse-error.js
│   │   └── parser-interface.js
│   │
│   ├── shared/               # Common hooks, utils, errors, helpers
│   │   ├── hooks/
│   │   │   ├── logger.hook.js
│   │   │   ├── telemetry.hook.js
│   │   │   └── performance.hook.js
│   │   │
│   │   ├── errors/
│   │   │   ├── error-collector.js
│   │   │   └── error-reporter.js
│   │   │
│   │   └── utils/
│   │       ├── string-utils.js
│   │       ├── regex-utils.js
│   │       └── array-utils.js
│   │
│   ├── parser/               # Glue: Where providers get registered
│   │   ├── parser-builder.js
│   │   └── index.js
│   │
│   ├── domain/               # data_model DSL
│   │   ├── entity/
│   │   │   ├── entity.provider.js
│   │   │   ├── entity.model.js
│   │   │   ├── entity.validator.js
│   │   │   └── entity.test.js
│   │   │
│   │   ├── properties/
│   │   │   ├── property.provider.js
│   │   │   ├── property.model.js
│   │   │   ├── property.validator.js
│   │   │   └── property.test.js
│   │   │
│   │   ├── guards/
│   │   │   ├── guard.provider.js
│   │   │   ├── guard.model.js
│   │   │   ├── guard.validator.js
│   │   │   └── guard.test.js
│   │   │
│   │   ├── triggers/
│   │   │   ├── trigger.provider.js
│   │   │   ├── trigger.model.js
│   │   │   ├── trigger.validator.js
│   │   │   └── trigger.test.js
│   │   │
│   │   └── side-effects/
│   │       ├── side-effect.provider.js
│   │       ├── side-effect.model.js
│   │       ├── side-effect.validator.js
│   │       └── side-effect.test.js
│   │
│   ├── form/                  # form DSL
│   │   ├── layout/
│   │   │   ├── layout.provider.js
│   │   │   ├── layout.model.js
│   │   │   ├── layout.validator.js
│   │   │   └── layout.test.js
│   │   │
│   │   ├── state/
│   │   │   ├── state.provider.js
│   │   │   ├── state.model.js
│   │   │   ├── state.validator.js
│   │   │   └── state.test.js
│   │   │
│   │   ├── conditions/
│   │   │   ├── condition.provider.js
│   │   │   ├── condition.model.js
│   │   │   ├── condition.validator.js
│   │   │   └── condition.test.js
│   │   │
│   │   ├── view-logic/
│   │   │   ├── view-logic.provider.js
│   │   │   ├── view-logic.model.js
│   │   │   ├── view-logic.validator.js
│   │   │   └── view-logic.test.js
│   │   │
│   │   └── actions/
│   │       ├── action.provider.js
│   │       ├── action.model.js
│   │       ├── action.validator.js
│   │       └── action.test.js
│
└── tests/                    # Integration level tests
    ├── full-entity-parse.test.js
    ├── full-form-parse.test.js
    └── edge-cases.test.js
