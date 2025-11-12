import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Header
      "client": "Client",
      "merchant": "Merchant",
      
      // Client Dashboard
      "dashboard": "Dashboard",
      "dashboardSubtitle": "Manage your wallets and NFC cards with ease.",
      "myWallets": "My Wallets",
      "createNewWallet": "Create new wallet",
      "myNFCCards": "My NFC Cards",
      "registerNewCard": "Register new card",
      "linkedTo": "Linked to",
      "noCardsRegistered": "No other cards registered",
      "noCardsDescription": "Click \"Register new card\" to link a new NFC card to one of your wallets.",
      "currentBTCPrice": "Current BTC Price",
      "lastUpdated": "Last updated",
      "justNow": "Just now",
      
      // Merchant Dashboard
      "merchantDashboard": "Merchant Dashboard",
      "merchantSubtitle": "Manage your commercial wallet and POS devices.",
      "myCommercialWallet": "My Commercial Wallet",
      "totalBalance": "Total Balance",
      "viewRecentTransactions": "View Recent Transactions",
      "devicesPOS": "Devices POS",
      "registerNewPOS": "Register new POS",
      "lastActive": "Last active",
      "online": "Online",
      "offline": "Offline",
      "importantCopyAPI": "Important: Copy this API Key now.",
      "importantDescription": "You will not be able to see it again for security reasons.",
      "yourNewAPIKey": "Your New API Key",
      "esp32Setup": "ESP32 Setup Instructions",
      "esp32Description": "To connect your ESP32 device, update your firmware configuration with the following details:",
      "esp32Step1": "Flash the latest version of the Bitcoin NFC Pay firmware onto your device.",
      "esp32Step2": "Connect the device to your Wi-Fi network.",
      "esp32Step3": "In the firmware's 'config.h' file, paste the API key provided above into the 'API_KEY' variable.",
      "esp32Step4": "Upload the updated configuration to your ESP32. The device will automatically connect and appear as \"Online\" in your dashboard.",
      "done": "Done",
      
      // Dialogs
      "createWallet": "Create Wallet",
      "createWalletDescription": "Create a new Bitcoin wallet for your transactions.",
      "walletName": "Wallet Name",
      "walletNamePlaceholder": "e.g., Daily Spending",
      "cancel": "Cancel",
      "create": "Create",
      
      "registerCard": "Register NFC Card",
      "registerCardDescription": "Link a new NFC card to one of your wallets.",
      "cardUID": "Card UID",
      "cardUIDPlaceholder": "e.g., 04-5A-88-C9-F2-3D-E1",
      "selectWallet": "Select Wallet",
      "selectWalletPlaceholder": "Choose a wallet",
      "register": "Register",
      
      "recentTransactions": "Recent Transactions",
      "recentTransactionsDescription": "View your latest payment transactions.",
      "date": "Date",
      "amount": "Amount",
      "status": "Status",
      "completed": "Completed",
      "pending": "Pending",
      "failed": "Failed",
      "close": "Close",
    }
  },
  es: {
    translation: {
      // Header
      "client": "Cliente",
      "merchant": "Comercio",
      
      // Client Dashboard
      "dashboard": "Panel de Control",
      "dashboardSubtitle": "Administra tus wallets y tarjetas NFC con facilidad.",
      "myWallets": "Mis Wallets",
      "createNewWallet": "Crear nueva wallet",
      "myNFCCards": "Mis Tarjetas NFC",
      "registerNewCard": "Registrar nueva tarjeta",
      "linkedTo": "Vinculada a",
      "noCardsRegistered": "No hay otras tarjetas registradas",
      "noCardsDescription": "Haz clic en \"Registrar nueva tarjeta\" para vincular una nueva tarjeta NFC a una de tus wallets.",
      "currentBTCPrice": "Precio Actual de BTC",
      "lastUpdated": "Última actualización",
      "justNow": "Justo ahora",
      
      // Merchant Dashboard
      "merchantDashboard": "Panel del Comercio",
      "merchantSubtitle": "Administra tu wallet comercial y dispositivos POS.",
      "myCommercialWallet": "Mi Wallet Comercial",
      "totalBalance": "Balance Total",
      "viewRecentTransactions": "Ver Transacciones Recientes",
      "devicesPOS": "Dispositivos POS",
      "registerNewPOS": "Registrar nuevo POS",
      "lastActive": "Última actividad",
      "online": "En línea",
      "offline": "Desconectado",
      "importantCopyAPI": "Importante: Copia esta API Key ahora.",
      "importantDescription": "No podrás verla nuevamente por razones de seguridad.",
      "yourNewAPIKey": "Tu Nueva API Key",
      "esp32Setup": "Instrucciones de Configuración ESP32",
      "esp32Description": "Para conectar tu dispositivo ESP32, actualiza la configuración del firmware con los siguientes detalles:",
      "esp32Step1": "Flashea la última versión del firmware de Bitcoin NFC Pay en tu dispositivo.",
      "esp32Step2": "Conecta el dispositivo a tu red Wi-Fi.",
      "esp32Step3": "En el archivo 'config.h' del firmware, pega la API key proporcionada arriba en la variable 'API_KEY'.",
      "esp32Step4": "Sube la configuración actualizada a tu ESP32. El dispositivo se conectará automáticamente y aparecerá como \"En línea\" en tu panel.",
      "done": "Listo",
      
      // Dialogs
      "createWallet": "Crear Wallet",
      "createWalletDescription": "Crea una nueva wallet de Bitcoin para tus transacciones.",
      "walletName": "Nombre de la Wallet",
      "walletNamePlaceholder": "ej., Gastos Diarios",
      "cancel": "Cancelar",
      "create": "Crear",
      
      "registerCard": "Registrar Tarjeta NFC",
      "registerCardDescription": "Vincula una nueva tarjeta NFC a una de tus wallets.",
      "cardUID": "UID de la Tarjeta",
      "cardUIDPlaceholder": "ej., 04-5A-88-C9-F2-3D-E1",
      "selectWallet": "Seleccionar Wallet",
      "selectWalletPlaceholder": "Elige una wallet",
      "register": "Registrar",
      
      "recentTransactions": "Transacciones Recientes",
      "recentTransactionsDescription": "Visualiza tus últimas transacciones de pago.",
      "date": "Fecha",
      "amount": "Monto",
      "status": "Estado",
      "completed": "Completado",
      "pending": "Pendiente",
      "failed": "Fallido",
      "close": "Cerrar",
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
