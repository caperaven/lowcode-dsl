import { GuardProvider } from './guards/guard.provider.js';
import { PropertyProvider } from './properties/property.provider.js';
import { SideEffectProvider } from './side-effects/side-effect.provider.js';
import { TriggerProvider } from './triggers/trigger.provider.js';

export function registerDataProviders(parser) {
    parser.registerProvider(/^GUARDS:/, new GuardProvider());
    parser.registerProvider(/^PROPERTIES:/, new PropertyProvider());
    parser.registerProvider(/^SIDE_EFFECTS:/, new SideEffectProvider());
    parser.registerProvider(/^TRIGGERS:/, new TriggerProvider());
}