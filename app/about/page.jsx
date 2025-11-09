"use client";

import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";

const teamMembers = [
  {
    name: "Phạm Tuấn Anh",
    role: "Developer",
    image: "/developer.jpg",
    bio: "Code cả cái trang này.",
  },
  {
    name: "Đoàn Xuân Duy Bảo",
    role: "Slider",
    image: "/slider.jpg",
    bio: "Làm cái slide.",
  },
  {
    name: "Nguyễn Khánh Linh",
    role: "Thuyết Trìnher",
    image: "/thuyettrinher.jpg",
    bio: "Làm cái thuyết trình.",
  },
  {
    name: "Đặng Minh Thu",
    role: "Nội Dunger",
    image: "/noidunger.jpg",
    bio: "Làm cái nội dung.",
  },
  {
    name: "Xuân",
    role: "Báo Cáoer",
    image: "/baocaoer.jpg",
    bio: "Làm cái báo cáo.",
  },
];

const milestones = [
  {
    year: "3/11",
    title: "Bắt đầu hành trình",
    description:
      "LaMode chính thức ra mắt – mang thời trang hiện đại, cá tính và đầy cảm hứng đến giới trẻ Việt.",
  },
  {
    year: "5/11",
    title: "Bộ sưu tập đầu tiên",
    description:
      "Ra mắt BST đầu tay, nhanh chóng trở thành xu hướng được yêu thích trong cộng đồng fashionista.",
  },
  {
    year: "10/11",
    title: "Cộng đồng LaMode",
    description:
      "Xây dựng cộng đồng người yêu thời trang – nơi chia sẻ phong cách và lan tỏa năng lượng sáng tạo.",
  },
  {
    year: "now",
    title: "Đỉnh cao thời trang",
    description:
      "LaMode hiện đang là đỉnh cao của thời trang không chi tại Việt Nam mà còn của cả thế giới.",
  },
];

export default function AboutPage() {
  const [expandedTeamMember, setExpandedTeamMember] = useState(null);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto w-full px-4 md:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="fade-in-up">
              <h1 className="text-5xl font-bold mb-6 text-foreground">
                Về LAMODE
              </h1>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                LaMode hướng đến việc tạo ra những thiết kế tinh tế, tôn vinh vẻ
                đẹp riêng của mỗi người. Mỗi sản phẩm là một hành trình của sự
                chăm chút, sáng tạo và tinh thần thời trang bền vững.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Kể từ khi ra mắt, LaMode luôn theo đuổi hành trình tạo nên những
                thiết kế thời trang tinh tế, tôn vinh phong cách riêng của mỗi
                người, cùng cam kết với giá trị đạo đức và phát triển bền vững.
              </p>
            </div>

            {/* Hero Image */}
            <div className="scroll-reveal">
              <div className="relative rounded-lg overflow-hidden h-96 bg-muted group">
                <img
                  src="/aboutus.jpg"
                  alt="About LAMODE"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="scroll-reveal text-center">
                <h3 className="text-3xl font-bold mb-3">Nhiệm vụ</h3>
                <p className="text-primary-foreground/80">
                  LaMode mang sứ mệnh truyền cảm hứng thời trang đến thế hệ trẻ,
                  giúp mỗi người tự tin thể hiện phong cách riêng qua những
                  thiết kế hiện đại, tinh tế và thân thiện với môi trường.
                </p>
              </div>
              <div
                className="scroll-reveal text-center"
                style={{ animationDelay: "0.1s" }}
              >
                <h3 className="text-3xl font-bold mb-3">Tầm nhìn</h3>
                <p className="text-primary-foreground/80">
                  LaMode hướng đến trở thành thương hiệu thời trang Việt tiên
                  phong trong sáng tạo và phát triển bền vững, đưa phong cách
                  Việt vươn tầm quốc tế.
                </p>
              </div>
              <div
                className="scroll-reveal text-center"
                style={{ animationDelay: "0.2s" }}
              >
                <h3 className="text-3xl font-bold mb-3">Giá trị cốt lõi</h3>
                <p className="text-primary-foreground/80">
                  Chúng tôi đề cao cá tính, chất lượng và sự sáng tạo trong từng
                  sản phẩm; cam kết phát triển bền vững, trách nhiệm với cộng
                  đồng và luôn đổi mới để mang đến trải nghiệm tốt nhất cho
                  khách hàng.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="max-w-7xl mx-auto w-full px-4 md:px-6 lg:px-8 py-16">
          <h2 className="text-4xl font-bold mb-12 text-foreground">
            Hành trình của chúng tôi
          </h2>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className="scroll-reveal flex gap-8 items-start"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Timeline Line */}
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                    {milestone.year}
                  </div>
                  {index !== milestones.length - 1 && (
                    <div className="w-1 h-24 bg-border my-2"></div>
                  )}
                </div>

                {/* Content */}
                <div className="pt-2 pb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="max-w-7xl mx-auto w-full px-4 md:px-6 lg:px-8 py-16">
          <h2 className="text-4xl font-bold mb-12 text-foreground">
            Thành viên
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className="scroll-reveal"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-card border border-border rounded-lg overflow-hidden card-lift group">
                  {/* Team Photo */}
                  <div className="relative w-full h-64 bg-muted overflow-hidden">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Team Info */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm text-accent font-semibold mb-3">
                      {member.role}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-muted py-16 mb-0">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="scroll-reveal text-center">
                <p className="text-4xl font-bold text-primary mb-2">0,05</p>
                <p className="text-foreground font-medium">Năm kinh nghiệm</p>
              </div>
              <div
                className="scroll-reveal text-center"
                style={{ animationDelay: "0.1s" }}
              >
                <p className="text-4xl font-bold text-primary mb-2">500K+</p>
                <p className="text-foreground font-medium">
                  Khách hàng hài lòng
                </p>
              </div>
              <div
                className="scroll-reveal text-center"
                style={{ animationDelay: "0.2s" }}
              >
                <p className="text-4xl font-bold text-primary mb-2">50+</p>
                <p className="text-foreground font-medium">Cửa hàng</p>
              </div>
              <div
                className="scroll-reveal text-center"
                style={{ animationDelay: "0.3s" }}
              >
                <p className="text-4xl font-bold text-primary mb-2">100%</p>
                <p className="text-foreground font-medium">
                  Nguyên liệu bền vững
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
