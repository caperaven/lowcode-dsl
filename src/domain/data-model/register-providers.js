import { GuardProvider } from './guards/guard.provider.js';
import { PropertyProvider } from './properties/property.provider.js';
import { SideEffectProvider } from './side-effects/side-effect.provider.js';
import { TriggerProvider } from './triggers/trigger.provider.js';

export function registerDataProviders(parser) {
    parser.registerProvider('GuardProvider', new GuardProvider());
    parser.registerProvider('PropertyProvider', new PropertyProvider());
    parser.registerProvider('SideEffectProvider', new SideEffectProvider());
    parser.registerProvider('TriggerProvider', new TriggerProvider());
}