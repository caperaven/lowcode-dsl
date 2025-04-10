import { ActionProvider } from './actions/action.provider.js';
import { ConditionProvider } from './conditions/condition.provider.js';
import { LayoutProvider } from './layout/layout.provider.js';
import { StateProvider } from './state/state.provider.js';
import { ViewLogicProvider } from './view-logic/view-logic.provider.js';
import { ParametersProvider } from './parameters/parameters.provider.js';

export function registerFormProviders(parser) {
    parser.registerProvider(/^ACTIONS:/, new ActionProvider());
    parser.registerProvider(/^CONDITIONS:/, new ConditionProvider());
    parser.registerProvider(/^LAYOUT:/, new LayoutProvider());
    parser.registerProvider(/^STATE:/, new StateProvider());
    parser.registerProvider(/^VIEW_LOGIC:/, new ViewLogicProvider());
    parser.registerProvider(/^PARAMETERS:/, new ParametersProvider());
}