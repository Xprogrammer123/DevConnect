import {
  Bell,
 UserRoundCog,
  Lock,
  CreditCard,
  Palette,
  HelpCircle
} from "lucide-react";

export const SettingsSections = [
  {
    id: "account",
    title: "Account Settings",
    icon: <UserRoundCog className="text-blue-500 h-6 w-6"/>,
    items: [
      { label: "Edit Profile", action: () => alert("Edit Profile clicked") },
      { label: "Change Password", action: () => alert("Change Password clicked") },
      { label: "Two-Factor Authentication", action: () => alert("2FA clicked") },
      { label: "Login Activity", action: () => alert("Login Activity clicked") },
    ],
  },
  {
    id: "notifications",
    title: "Notification Settings",
    icon: <Bell className="text-yellow-500 h-6 w-6" />,
    items: [
      { label: "Email Notifications", action: () => alert("Email Notifications clicked") },
      { label: "Push Notifications", action: () => alert("Push Notifications clicked") },
    ],
  },
  {
    id: "payment",
    title: "Payment Preferences",
    icon: <CreditCard className="text-green-500 h-6 w-6" />,
    items: [
      { label: "Default Payment Method", action: () => alert("Default Payment Method clicked") },
      { label: "Saved Payment Methods", action: () => alert("Saved Payment Methods clicked") },
    ],
  },
  {
    id: "appearance",
    title: "App Preferences",
    icon: <Palette className="text-purple-500 h-6 w-6" />,
    items: [
      { label: "Theme Settings", action: () => alert("Theme Settings clicked") },
      { label: "Language Preferences", action: () => alert("Language Preferences clicked") },
      { label: "Accessibility", action: () => alert("Accessibility clicked") },
    ],
  },
  {
    id: "privacy",
    title: "Privacy and Data",
    icon: <Lock className="text-red-500 h-6 w-6" />,
    items: [
      { label: "Data Sharing Preferences", action: () => alert("Data Sharing Preferences clicked") },
      { label: "Download Your Data", action: () => alert("Download Your Data clicked") },
      { label: "Delete Account", action: () => alert("Delete Account clicked") },
    ],
  },
  {
    id: "support",
    title: "Support and Feedback",
    icon: <HelpCircle className="text-indigo-500 h-6 w-6" />,
    items: [
      { label: "Help Center", action: () => alert("Help Center clicked") },
      { label: "Contact Support", action: () => alert("Contact Support clicked") },
      { label: "Submit Feedback", action: () => alert("Submit Feedback clicked") },
    ],
  },
];
