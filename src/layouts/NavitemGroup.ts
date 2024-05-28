// import { IconDefinition } from '@fortawesome/pro-regular-svg-icons'
// import { FeatureFlags } from 'src/config/FeatureFlags'
// import { ApplicationFeatureName } from 'src/models/ApplicationFeature/ApplicationFeatureName'

export interface NavItemGroup {
  id: string
  subheader?: string
  title?: string
  href?: string
  relativeToBusiness?: boolean
//   icon?: string,
//   featureFlag?: FeatureFlags
  planFeature?: string
  permissions?: string[]
//   applicationFeatureName?: ApplicationFeatureName
  isNewFeature?: boolean
  isBeta?: boolean
  isInboxLink?: boolean
  unreadMessageCount?: number
  children?: NavItemGroup[]
}
