export async function POST(req) {
  try {
    const body = await req.json();

    // 🔹 Dữ liệu đầu vào bổ sung (fashion knowledge base)
    const fashionData = `
    LAMODE được định vị là thương hiệu thời trang tối giản, tinh tế, mang thông điệp “Đơn giản là thời trang”. Mục tiêu của dự án là xây dựng website bán hàng trực tuyến chuyên nghiệp, giao diện thân thiện, tối ưu trải nghiệm người dùng và tích hợp các công cụ hỗ trợ như chatbot, email marketing, tối ưu SEO và quảng cáo Google Ads. Website đóng vai trò kênh bán hàng chính, cho phép khách hàng xem sản phẩm, đặt hàng, thanh toán và theo dõi đơn hàng nhanh chóng, đồng thời giúp doanh nghiệp tiết kiệm chi phí vận hành so với cửa hàng truyền thống.

Báo cáo phân tích thị trường thời trang Việt Nam – nơi xu hướng mua sắm online tăng mạnh nhưng cạnh tranh gay gắt. Thông qua mô hình SWOT, nhóm chỉ ra điểm mạnh của LAMODE là chất lượng sản phẩm, phong cách riêng, dịch vụ chăm sóc khách hàng chuyên nghiệp; điểm yếu là thương hiệu mới, vốn và kinh nghiệm hạn chế; cơ hội đến từ sự phát triển của TMĐT và nhu cầu cá nhân hóa; trong khi thách thức là cạnh tranh giá và sự thay đổi xu hướng nhanh chóng.

LAMODE lựa chọn chiến lược khác biệt hóa thay vì chạy theo giá rẻ, hướng đến khách hàng trẻ có gu thẩm mỹ và sẵn sàng chi trả cho sản phẩm chất lượng. Dự án cũng đề xuất kế hoạch marketing cụ thể: chạy quảng cáo Google Ads, tối ưu SEO, tích hợp chatbot hỗ trợ 24/7, triển khai email marketing cá nhân hóa và áp dụng hợp đồng điện tử trong giao dịch để đảm bảo minh bạch, nhanh chóng và hợp pháp.

Giao diện website được thiết kế tối giản, với các module chính gồm: trang chủ, giới thiệu, sản phẩm, tin tức, tìm kiếm và liên hệ. Màu sắc chủ đạo trắng – be – xanh lá tạo cảm giác tinh tế. Trang “Về LAMODE” giới thiệu triết lý thương hiệu, sứ mệnh, tầm nhìn và hành trình phát triển.

Về mô hình kinh doanh, doanh thu chủ yếu đến từ bán lẻ trực tuyến và quảng cáo liên kết. LAMODE cũng triển khai chương trình khuyến mãi, tích điểm và ưu đãi vận chuyển để thu hút khách hàng. Trong tương lai, thương hiệu hướng tới mô hình O2O (Online to Offline), mở showroom tại các thành phố lớn nhằm kết hợp trải nghiệm thực tế và trực tuyến.
    `;

    // 🔹 Prompt hệ thống để giới hạn và định dạng câu trả lời
    const systemPrompt = `
    Tên bạn là LAMODE's AI
    Không dùng markdown khi trả lời.
    Bạn là một trợ lý thời trang thông minh. 
    Chỉ được phép nói về chủ đề thời trang hoặc các dữ liệu tôi đã cung cấp.
    Nếu câu hỏi không liên quan đến thời trang và shop, hãy trả lời: 
    "Xin lỗi, tôi chỉ có thể hỗ trợ về thời trang và phong cách ăn mặc."

    Dưới đây là cơ sở dữ liệu bạn có thể sử dụng:
    ${fashionData}

    `;

    // 🔹 Gọi API thật
    const response = await fetch(
      "https://research.neu.edu.vn/ollama/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "qwen3:8b",
          messages: [
            { role: "system", content: systemPrompt },
            ...body.messages,
          ],
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      return new Response(JSON.stringify({ error: errorText }), {
        status: 500,
      });
    }

    const data = await response.json();
    return Response.json(data);
  } catch (error) {
    console.error("Chat API route error:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
    });
  }
}
