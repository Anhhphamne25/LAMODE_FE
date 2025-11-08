"use client"

import { Eye, EyeOff } from "lucide-react"
import { useState } from "react"

export function ProfileForm({ profileData, onProfileChange }) {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="bg-card border border-border rounded-lg p-8 card-lift">
      <h2 className="text-2xl font-bold mb-6 text-foreground">Profile Information</h2>

      <div className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2 text-foreground">Full Name</label>
            <input
              type="text"
              name="name"
              value={profileData.name}
              onChange={onProfileChange}
              className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-foreground">Email</label>
            <input
              type="email"
              name="email"
              value={profileData.email}
              onChange={onProfileChange}
              className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-foreground">Phone</label>
          <input
            type="tel"
            name="phone"
            value={profileData.phone}
            onChange={onProfileChange}
            className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-foreground">Address</label>
          <input
            type="text"
            name="address"
            value={profileData.address}
            onChange={onProfileChange}
            className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2 text-foreground">City</label>
            <input
              type="text"
              name="city"
              value={profileData.city}
              onChange={onProfileChange}
              className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-foreground">State</label>
            <input
              type="text"
              name="state"
              value={profileData.state}
              onChange={onProfileChange}
              className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-foreground">Zip Code</label>
            <input
              type="text"
              name="zipcode"
              value={profileData.zipcode}
              onChange={onProfileChange}
              className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            />
          </div>
        </div>

        <button className="w-full py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105">
          Save Changes
        </button>
      </div>

      {/* Change Password Section */}
      <div className="mt-8 pt-8 border-t border-border">
        <h3 className="text-lg font-bold mb-4 text-foreground">Change Password</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2 text-foreground">Current Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter current password"
                className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-muted-foreground hover:text-foreground"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-foreground">New Password</label>
            <input
              type="password"
              placeholder="Enter new password"
              className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            />
          </div>
          <button className="w-full py-2 border border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors font-medium">
            Update Password
          </button>
        </div>
      </div>
    </div>
  )
}
