import { Truck, Wrench, Shield, Star } from "lucide-react"

const services = [
  {
    icon: Star,
    title: "筛选时髦与品质家具",
    description: "我们精选来自优质品牌的家具，确保每一件都兼具美观与耐用，适合马来西亚家庭。",
    color: "text-amber",
    bg: "bg-amber/10",
  },
  {
    icon: Wrench,
    title: "专业家具选购建议",
    description: "我们的专业顾问将根据您的空间、预算和生活方式，为您提供量身定制的家具建议。",
    color: "text-lime",
    bg: "bg-lime/10",
  },
  {
    icon: Truck,
    title: "配送、安装及售后服务",
    description: "从配送到安装，再到售后保修，我们的专业团队全程陪伴，让您安心无忧。",
    color: "text-info",
    bg: "bg-info/10",
  },
  {
    icon: Shield,
    title: "品质保证",
    description: "所有商品均附有原厂保修，加上我们的售后支持团队，购买后依然有完善保障。",
    color: "text-success",
    bg: "bg-success/10",
  },
]

export function ServiceHighlights() {
  return (
    <section className="py-14 bg-warm" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-10">
          <h2 id="services-heading" className="text-3xl font-bold text-charcoal mb-3">Why Choose Finotti?</h2>
          <p className="text-base text-grey max-w-lg mx-auto">More than just furniture — a complete home experience from selection to installation.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, description, color, bg }) => (
            <div key={title} className="bg-white rounded-xl p-6 border border-grey-light">
              <div className={`w-14 h-14 ${bg} rounded-xl flex items-center justify-center mb-4`}>
                <Icon size={28} className={color} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-charcoal mb-2">{title}</h3>
              <p className="text-base text-grey leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
