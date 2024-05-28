import OfflineStorage from "./OffineStorage"
import { hasStorage } from "./hasStorage"

const StorageService = hasStorage('localStorage')
  ? new OfflineStorage('localStorage')
  : new OfflineStorage('sessionStorage')

export default StorageService
