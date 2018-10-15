import { EffectsModule } from '@ngrx/effects';

import { CoreEffects } from './core.effects';
import { RouterEffects } from './router.effects';
import { SessionEffects } from './session.effects';

const effects = [CoreEffects, RouterEffects, SessionEffects];

export const EFFECTS = EffectsModule.forRoot(effects);
