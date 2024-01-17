import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const BuyerYourLandwithProfile = React.lazy(
  () => import("pages/BuyerYourLandwithProfile"),
);
const BuyerYourLand = React.lazy(() => import("pages/BuyerYourLand"));
const SellerHomepagePanel = React.lazy(
  () => import("pages/SellerHomepagePanel"),
);
const ReccomendationsOne = React.lazy(() => import("pages/ReccomendationsOne"));
const Wallet = React.lazy(() => import("pages/Wallet"));
const BuyerchatwithProfile = React.lazy(
  () => import("pages/BuyerchatwithProfile"),
);
const SellerHistorywithMenuPanel = React.lazy(
  () => import("pages/SellerHistorywithMenuPanel"),
);
const Buyerhistory = React.lazy(() => import("pages/Buyerhistory"));
const BuyerhistorywithMenuPanel = React.lazy(
  () => import("pages/BuyerhistorywithMenuPanel"),
);
const Buyerjobv = React.lazy(() => import("pages/Buyerjobv"));
const Buyerhomepage = React.lazy(() => import("pages/Buyerhomepage"));
const ReccomendationswmenuOne = React.lazy(
  () => import("pages/ReccomendationswmenuOne"),
);
const BuyernotifwithProfile = React.lazy(
  () => import("pages/BuyernotifwithProfile"),
);
const BuyerhomepagewithMenuPanel = React.lazy(
  () => import("pages/BuyerhomepagewithMenuPanel"),
);
const Reccomendations = React.lazy(() => import("pages/Reccomendations"));
const SellerHomepage = React.lazy(() => import("pages/Homepage"));
const Buyerjobvwprofile = React.lazy(() => import("pages/Buyerjobvwprofile"));
const BuyerhomepagePanel = React.lazy(() => import("pages/BuyerhomepagePanel"));
const Buyerhomepagewithprofile = React.lazy(
  () => import("pages/Buyerhomepagewithprofile"),
);
const Reccomendationswmenu = React.lazy(
  () => import("pages/Reccomendationswmenu"),
);
const BuyerYourLandwithMenu = React.lazy(
  () => import("pages/BuyerYourLandwithMenu"),
);
const SellerHomepagewithProfile = React.lazy(
  () => import("pages/SellerHomepagewithProfile"),
);
const SettingsAccountbuyer = React.lazy(
  () => import("pages/SettingsAccountbuyer"),
);
const DailyAttendanceOne = React.lazy(() => import("pages/DailyAttendanceOne"));
const SignOut = React.lazy(() => import("pages/SignOut"));
const SettingsLanguagebuyer = React.lazy(
  () => import("pages/SettingsLanguagebuyer"),
);
const SettingsPrivacybuyer = React.lazy(
  () => import("pages/SettingsPrivacybuyer"),
);
const Buyerjobvwiithmenu = React.lazy(() => import("pages/Buyerjobvwiithmenu"));
const SellerJobVacancieswithProfile = React.lazy(
  () => import("pages/SellerJobVacancieswithProfile"),
);
const SellerJobVacancies = React.lazy(() => import("pages/SellerJobVacancies"));
const Login = React.lazy(() => import("pages/Login"));
const SellerHistorywithProfile = React.lazy(
  () => import("pages/SellerHistorywithProfile"),
);
const ReccomendationswprofileOne = React.lazy(
  () => import("pages/ReccomendationswprofileOne"),
);
const DailyAttendance = React.lazy(() => import("pages/DailyAttendance"));
const SellerHistory = React.lazy(() => import("pages/SellerHistory"));
const UserProfilebuyer = React.lazy(() => import("pages/UserProfilebuyer"));
const ChatwithMenu = React.lazy(() => import("pages/ChatwithMenu"));
const SellerJobVacancieswithMenu = React.lazy(
  () => import("pages/SellerJobVacancieswithMenu"),
);
const SettingsPrivacyOne = React.lazy(() => import("pages/SettingsPrivacyOne"));
const Buyerchat = React.lazy(() => import("pages/Buyerchat"));
const SettingsLanguage = React.lazy(() => import("pages/SettingsLanguage"));
const SettingsThemebuyer = React.lazy(() => import("pages/SettingsThemebuyer"));
const SettingsTheme = React.lazy(() => import("pages/SettingsTheme"));
const Buyernotif = React.lazy(() => import("pages/Buyernotif"));
const SettingsAccount = React.lazy(() => import("pages/SettingsAccount"));
const Reccomendationswprofile = React.lazy(
  () => import("pages/Reccomendationswprofile"),
);
const NotificationwithProfile = React.lazy(
  () => import("pages/NotificationwithProfile"),
);
const LandManage = React.lazy(() => import("pages/LandManage"));
const WalletOne = React.lazy(() => import("pages/WalletOne"));
const SellerYourlandwithProfile = React.lazy(
  () => import("pages/SellerYourlandwithProfile"),
);
const NotificationwithMenu = React.lazy(
  () => import("pages/NotificationwithMenu"),
);
const SellerYourLandwithMenu = React.lazy(
  () => import("pages/SellerYourLandwithMenu"),
);
const Notification = React.lazy(() => import("pages/Notification"));
const BuyernotifwithMenu = React.lazy(() => import("pages/BuyernotifwithMenu"));
const SettingsNotifications = React.lazy(
  () => import("pages/SettingsNotifications"),
);
const BuyerchatwithMenu = React.lazy(() => import("pages/BuyerchatwithMenu"));
const Chat = React.lazy(() => import("pages/Chat"));
const SignUp = React.lazy(() => import("pages/SignUp"));
const ChatwithProfile = React.lazy(() => import("pages/ChatwithProfile"));
const Buyerhistorywprofile = React.lazy(
  () => import("pages/Buyerhistorywprofile"),
);
const SettingsPrivacy = React.lazy(() => import("pages/SettingsPrivacy"));
const SettingsNotificationsbuyer = React.lazy(
  () => import("pages/SettingsNotificationsbuyer"),
);
const UserProfile = React.lazy(() => import("pages/UserProfile"));
const SellerHomepagewithMenuPanel = React.lazy(
  () => import("pages/SellerHomepagewithMenuPanel"),
);
const LandCreate = React.lazy(() => import("pages/LandCRUD/create"))

const Detail = React.lazy(() => import("pages/Detail"))
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="detail/:landowner/:slug" element={<Detail />} />
          <Route path="/" element={<SellerHomepage />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/sellerhomepagewithmenupanel"
            element={<SellerHomepagewithMenuPanel />}
          />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route
            path="/settingsnotificationsbuyer"
            element={<SettingsNotificationsbuyer />}
          />
          <Route path="/settingsprivacy" element={<SettingsPrivacy />} />
          <Route
            path="/buyerhistorywprofile"
            element={<Buyerhistorywprofile />}
          />
          <Route path="/chatwithprofile" element={<ChatwithProfile />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/chat/:room_id/:username" element={<Chat />} />
          <Route path="/buyerchatwithmenu" element={<BuyerchatwithMenu />} />
          <Route
            path="/settingsnotifications"
            element={<SettingsNotifications />}
          />
          <Route path="/buyernotifwithmenu" element={<BuyernotifwithMenu />} />
          <Route path="/notification" element={<Notification />} />
          <Route
            path="/selleryourlandwithmenu"
            element={<SellerYourLandwithMenu />}
          />
          <Route
            path="/notificationwithmenu"
            element={<NotificationwithMenu />}
          />
          <Route
            path="/selleryourlandwithprofile"
            element={<SellerYourlandwithProfile />}
          />
          <Route path="/walletone" element={<WalletOne />} />
          <Route path="/land/manage/" element={<LandManage />} />
          <Route
            path="/notificationwithprofile"
            element={<NotificationwithProfile />}
          />
          <Route
            path="/reccomendationswprofile"
            element={<Reccomendationswprofile />}
          />
          <Route path="/settingsaccount" element={<SettingsAccount />} />
          <Route path="/buyernotif" element={<Buyernotif />} />
          <Route path="/settingstheme" element={<SettingsTheme />} />
          <Route path="/settingsthemebuyer" element={<SettingsThemebuyer />} />
          <Route path="/settingslanguage" element={<SettingsLanguage />} />
          <Route path="/buyerchat" element={<Buyerchat />} />
          <Route path="/settingsprivacyone" element={<SettingsPrivacyOne />} />
          <Route
            path="/sellerjobvacancieswithmenu"
            element={<SellerJobVacancieswithMenu />}
          />
          <Route path="/chatwithmenu" element={<ChatwithMenu />} />
          <Route path="/userprofilebuyer" element={<UserProfilebuyer />} />
          <Route path="/sellerhistory" element={<SellerHistory />} />
          <Route path="/dailyattendance" element={<DailyAttendance />} />
          <Route
            path="/reccomendationswprofileone"
            element={<ReccomendationswprofileOne />}
          />
          <Route
            path="/sellerhistorywithprofile"
            element={<SellerHistorywithProfile />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/sellerjobvacancies" element={<SellerJobVacancies />} />
          <Route
            path="/sellerjobvacancieswithprofile"
            element={<SellerJobVacancieswithProfile />}
          />
          <Route path="/buyerjobvwiithmenu" element={<Buyerjobvwiithmenu />} />
          <Route
            path="/settingsprivacybuyer"
            element={<SettingsPrivacybuyer />}
          />
          <Route
            path="/settingslanguagebuyer"
            element={<SettingsLanguagebuyer />}
          />
          <Route path="/signout" element={<SignOut />} />
          <Route path="/dailyattendanceone" element={<DailyAttendanceOne />} />
          <Route
            path="/settingsaccountbuyer"
            element={<SettingsAccountbuyer />}
          />
          <Route
            path="/sellerhomepagewithprofile"
            element={<SellerHomepagewithProfile />}
          />
          <Route
            path="/buyeryourlandwithmenu"
            element={<BuyerYourLandwithMenu />}
          />
          <Route
            path="/reccomendationswmenu"
            element={<Reccomendationswmenu />}
          />
          <Route
            path="/buyerhomepagewithprofile"
            element={<Buyerhomepagewithprofile />}
          />
          <Route path="/buyerhomepagepanel" element={<BuyerhomepagePanel />} />
          <Route path="/buyerjobvwprofile" element={<Buyerjobvwprofile />} />
          <Route path="/sellerhomepage" element={<SellerHomepage />} />
          <Route path="/reccomendations" element={<Reccomendations />} />
          <Route
            path="/buyerhomepagewithmenupanel"
            element={<BuyerhomepagewithMenuPanel />}
          />
          <Route
            path="/buyernotifwithprofile"
            element={<BuyernotifwithProfile />}
          />
          <Route
            path="/reccomendationswmenuone"
            element={<ReccomendationswmenuOne />}
          />
          <Route path="/buyerhomepage" element={<Buyerhomepage />} />
          <Route path="/buyerjobv" element={<Buyerjobv />} />
          <Route
            path="/buyerhistorywithmenupanel"
            element={<BuyerhistorywithMenuPanel />}
          />
          <Route path="/buyerhistory" element={<Buyerhistory />} />
          <Route
            path="/sellerhistorywithmenupanel"
            element={<SellerHistorywithMenuPanel />}
          />
          <Route
            path="/buyerchatwithprofile"
            element={<BuyerchatwithProfile />}
          />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/reccomendationsone" element={<ReccomendationsOne />} />
          <Route
            path="/sellerhomepagepanel"
            element={<SellerHomepagePanel />}
          />
          <Route path="/buyeryourland" element={<BuyerYourLand />} />
          <Route
            path="/buyeryourlandwithprofile"
            element={<BuyerYourLandwithProfile />}
          />
          <Route
            path="/land/manage/create"
            element={<LandCreate />}
          />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
