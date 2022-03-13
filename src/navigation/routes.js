import icon_home from "../assets/images/icon/icon_home.png"
import icon_home_actived from "../assets/images/icon/icon_home_actived.png"
import icon_mybook from "../assets/images/icon/icon_mybook.png"
import icon_mybook_actived from "../assets/images/icon/icon_mybook_actived.png"
import icon_nav_bookmark from "../assets/images/icon/icon_nav_bookmark.png"
import icon_nav_bookmark_actived from "../assets/images/icon/icon_nav_bookmark_actived.png"
import icon_account from "../assets/images/icon/icon_account.png"
import icon_account_actived from "../assets/images/icon/icon_account_actived.png"
import icon_settings from "../assets/images/icon/icon_settings.png"
import icon_settings_actived from "../assets/images/icon/icon_settings_actived.png"


import HomeStackNavigator from "./stack/HomeStackNavigator";
import WishListStackNavigator from "./stack/WishListStackNavigator";
import MyBooksStackNavigator from "./stack/MyBooksStackNavigator";
import AccountStackNavigator from "./stack/AccountStackNavigator";
import SettingStackNavigator from "./stack/SettingStackNavigator";


export default routes = [
    {
        title: "Home",
        icon: { default: icon_home, actived: icon_home_actived },
        stack: HomeStackNavigator
    },
    {
        title: "WishList",
        icon: { default: icon_nav_bookmark, actived: icon_nav_bookmark_actived },
        stack: WishListStackNavigator
    },
    {
        title: "My Books",
        icon: { default: icon_mybook, actived: icon_mybook_actived },
        stack: MyBooksStackNavigator
    },
    {
        title: "Account",
        icon: { default: icon_account, actived: icon_account_actived },
        stack: AccountStackNavigator
    },
    {
        title: "Setting",
        icon: { default: icon_settings, actived: icon_settings_actived },
        stack: SettingStackNavigator
    },
];