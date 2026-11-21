// 社團巡禮護照｜Firebase 專案設定（這不是密碼，資料保護靠 Firestore 安全規則）
window.RALLY_FB = {
  apiKey: "AIzaSyBGOtEUOwKlWCjL_wL0lT2NJYUOM3GaXIA",
  authDomain: "rally-2026-c7f4c.firebaseapp.com",
  projectId: "rally-2026-c7f4c",
  storageBucket: "rally-2026-c7f4c.firebasestorage.app",
  messagingSenderId: "864056261699",
  appId: "1:864056261699:web:a0da3d30df91d7483968f6"
};
// 後端開關：'fire' = 正式版（資料存 Firebase）；'local' = 原型預覽（含範例資料，只供測試）
window.RALLY_MODE = 'fire';
