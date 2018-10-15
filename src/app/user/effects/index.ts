import { EffectsModule } from '@ngrx/effects';

import { CurrentUserEffects } from './current-user.effects';

const effects = [CurrentUserEffects];

export const EFFECTS = EffectsModule.forFeature(effects);
