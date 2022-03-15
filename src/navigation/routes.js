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
import TabNavigator from "./TabNavigator"

export const routes_tab = [
    {
        title: "Home",
        icon: { default: icon_home, actived: icon_home_actived },
        navigator: HomeStackNavigator,
    },
    {
        title: "WishList",
        icon: { default: icon_nav_bookmark, actived: icon_nav_bookmark_actived },
        navigator: WishListStackNavigator,
    },
    {
        title: "My Books",
        icon: { default: icon_mybook, actived: icon_mybook_actived },
        navigator: MyBooksStackNavigator,
    }
];


export default routes = [
    {
        title: "Home",
        icon: { default: icon_home, actived: icon_home_actived },
        navigator: TabNavigator,
    },
    {
        title: "Account",
        icon: { default: icon_account, actived: icon_account_actived },
        navigator: AccountStackNavigator
    },
    {
        title: "Setting",
        icon: { default: icon_settings, actived: icon_settings_actived },
        navigator: SettingStackNavigator
    },
];