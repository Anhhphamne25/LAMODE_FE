"use client";

import { LogOut } from "lucide-react";

export function AccountSidebar() {
  return (
    <div className="bg-card border border-border rounded-lg p-6 card-lift">
      <h3 className="text-lg font-bold mb-4 text-foreground">
        Trạng thái tài khoản
      </h3>
      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Tham gia từ</span>
          <span className="font-semibold">10/11/2025</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Tổng đơn hàng</span>
          <span className="font-semibold">12</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Tổng chi tiêu</span>
          <span className="font-semibold">300.249.990 VNĐ</span>
        </div>
      </div>
      <button className="w-full mt-6 py-2 border border-destructive text-destructive rounded-lg hover:bg-destructive/5 transition-colors font-medium flex items-center justify-center gap-2">
        <LogOut className="w-4 h-4" />
        Đăng xuất
      </button>
    </div>
  );
}
