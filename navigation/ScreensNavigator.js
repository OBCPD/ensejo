import React from 'react'
import { createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';


import AboutUsScreen from '../screens/AboutUsScreen';
import HomeScreen from '../screens/HomeScreen';

import SigninScreen from '../screens/SigninScreen'
import SigninJobsScreen from '../screens/sub-signin-screens/SigninJobsScreen';
import SigninVoluntaryScreen from '../screens/sub-signin-screens/SigninVoluntaryScreen';
import SigninCourseScreen from '../screens/sub-signin-screens/SigninCourseScreen';
import SigninCulturalScreen from '../screens/sub-signin-screens/SigninCulturalScreen';
import SigninDonationScreen from '../screens/sub-signin-screens/SigninDonationScreen';
import SigninEducationScreen from '../screens/sub-signin-screens/SigninEducationScreen';
import SigninManifestationScreen from '../screens/sub-signin-screens/SigninManifestionScreen';
import SigninNGOScreen from '../screens/sub-signin-screens/SigninNGOScreen';
import SigninYoutubeScreen from '../screens/sub-signin-screens/SigninYoutubeScreen';

import FilterScreen from '../screens/FilterScreen';
import OpportunitiesScreen from '../screens/OpportunitiesScreen';
import VoluntariesScreen from '../screens/VoluntariesScreen';
import JobsBalconyScreen from '../screens/JobsBalconyScreen';
import HelpScreen from '../screens/HelpScreen';
import CultureScreen from '../screens/CultureScreen';
import ManifestationScreen from '../screens/ManifestationScreen';
import NGOsScreen from '../screens/NGOsScreen';
import YoutubeChannelsScreen from '../screens/YoutubeChannelsScreen';
import DonationScreen from '../screens/DonationScreen';
import OnlineCourseScreen from '../screens/OnlineCourseScreen';
import CulturesScreen from '../screens/CulturesScreen';


const appDefaultNavigationOptions = {
    headerStyle: {
        backgroundColor: 'rgb(192,27,44)',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
    }
}
const AboutUs = createStackNavigator(
    {
        AboutUs : AboutUsScreen
    },
    {    
        defaultNavigationOptions: appDefaultNavigationOptions
    }
);



const HomeNavigator = createStackNavigator(
    {
        Home : HomeScreen,
        Signin: SigninScreen,
        

        SigninJobs: SigninJobsScreen,
        SigninVoluntary: SigninVoluntaryScreen,
        SigninCourse: SigninCourseScreen,
        SigninCultural: SigninCulturalScreen,
        SigninDonation: SigninDonationScreen,
        SigninEducation: SigninEducationScreen,
        SigninManifestation: SigninManifestationScreen,
        SigninNGO: SigninNGOScreen,
        SigninYoutube: SigninYoutubeScreen,


        Manifestations: ManifestationScreen,
        Voluntaries : VoluntariesScreen,
        JobsBalcony : JobsBalconyScreen,
        NGOs: NGOsScreen,
        YoutubeChannels: YoutubeChannelsScreen,
        OnlineCourses: OnlineCourseScreen,
        Filter: FilterScreen,
        Opportunities: OpportunitiesScreen,
        Help: HelpScreen,
        Culture: CultureScreen,
        Donation: DonationScreen,
        Cultures: CulturesScreen,
        

    },
    {
        defaultNavigationOptions: appDefaultNavigationOptions 
    }
);
const TabNavigator = createBottomTabNavigator(
    {
        
        HomeTab: {screen : HomeNavigator, navigationOptions : {
            tabBarIcon : (tabInfo) =>{
               return <Ionicons name = 'ios-home' size = {25} color = {tabInfo.tintColor} />;
            },
            tabBarLabel : 'Home'
        }},
        AboutUsTab : {screen : AboutUs, navigationOptions : {
            tabBarIcon : (tabInfo) =>{
               return <Ionicons name = 'ios-book' size = {25} color = {tabInfo.tintColor} />;
            },
            tabBarLabel : 'About Us'
        }},
    },
    {
        tabBarOptions : {
            activeTintColor : 'rgb(192,27,44)'
        }
    }
);


export default createAppContainer(TabNavigator); 