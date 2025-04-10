import { ActionProvider } from './actions/action.provider';
import { ConditionProvider } from './conditions/condition.provider';
import { LayoutProvider } from './layout/layout.provider';
import { StateProvider } from './state/state.provider';
import { ViewLogicProvider } from './view-logic/view-logic.provider';

export function registerFormProviders(parser) {
    parser.registerProvider('ActionProvider', new ActionProvider());
    parser.registerProvider('ConditionProvider', new ConditionProvider());
    parser.registerProvider('LayoutProvider', new LayoutProvider());
    parser.registerProvider('StateProvider', new StateProvider());
    parser.registerProvider('ViewLogicProvider', new ViewLogicProvider());
}