import LoginLayout from 'layouts/LoginLayout.vue';
import MainLayout from 'layouts/MainLayout.vue';
import ErrorNotFound from 'pages/ErrorNotFound.vue';
import AssetFeature from 'pages/features/AssetFeature.vue';
import GameplayFeature from 'pages/features/GameplayFeature.vue';
import CraftingFeature from 'pages/features/CraftingFeature.vue';
import AssureFeature from 'pages/features/AssureFeature.vue';
import SettingsFeature from 'pages/features/SettingsFeature.vue';

export default [
  {
    path: '/:token_id',
    component: LoginLayout,
  },
  {
    path: '/:token_id',
    component: MainLayout,
    children: [
      {
        path: 'asset',
        name: 'Asset',
        icon: 'diamond',
        meta: { requiresAuth: false },
        component: AssetFeature,
      },
      {
        path: 'gameplay',
        name: 'Gameplay',
        icon: 'sports_esports',
        meta: { requiresAuth: true },
        component: GameplayFeature,
      },
      {
        path: 'crafting',
        name: 'Crafting',
        icon: 'join_full',
        meta: { requiresAuth: true },
        component: CraftingFeature,
      },
      {
        path: 'assure',
        name: 'Assure',
        icon: 'gpp_good',
        meta: { requiresAuth: true },
        component: AssureFeature,
      },
      {
        path: 'settings',
        name: 'Settings',
        icon: 'settings',
        meta: { requiresAuth: true },
        component: SettingsFeature,
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: ErrorNotFound,
  },
];
