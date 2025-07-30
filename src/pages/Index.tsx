import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Index() {
  const packages = [
    {
      name: "Стартовый",
      price: "45 000 ₽",
      originalPrice: "65 000 ₽",
      description: "Идеально для небольших проектов",
      features: [
        "Базовые согласования",
        "Документооборот до 10 позиций",
        "Поддержка 30 дней",
        "Стандартные сроки"
      ],
      popular: false,
      color: "turquoise"
    },
    {
      name: "Профессиональный",
      price: "89 000 ₽",
      originalPrice: "120 000 ₽",
      description: "Наш самый популярный пакет",
      features: [
        "Все согласования под ключ",
        "Документооборот без ограничений",
        "Поддержка 90 дней",
        "Ускоренные сроки",
        "Персональный менеджер",
        "Разберусь с ДФМ за вас",
        "Гарантия результата 100%"
      ],
      popular: true,
      color: "orange"
    },
    {
      name: "Корпоративный",
      price: "150 000 ₽",
      originalPrice: "200 000 ₽",
      description: "Для крупных проектов и компаний",
      features: [
        "VIP-обслуживание",
        "Приоритетное рассмотрение",
        "Поддержка 365 дней",
        "Экспресс-сроки",
        "Команда экспертов",
        "Юридическое сопровождение"
      ],
      popular: false,
      color: "navy"
    }
  ];

  const testimonials = [
    {
      name: "Алексей Морозов",
      position: "Директор ООО 'СтройИнвест'",
      text: "Сергей помог нам получить все согласования за рекордные 2 недели. Профессионализм на высшем уровне!",
      rating: 5
    },
    {
      name: "Мария Петрова",
      position: "Руководитель проекта",
      text: "Благодаря Сергею наш проект запустился в срок. Все документы оформлены идеально, никаких проблем с проверяющими органами.",
      rating: 5
    },
    {
      name: "Дмитрий Волков",
      position: "Генеральный директор",
      text: "Работаем с Сергеем уже 3 года. Он знает все тонкости согласований и всегда находит оптимальные решения.",
      rating: 5
    }
  ];

  const advantages = [
    {
      icon: "Clock",
      title: "Быстрые сроки",
      description: "Согласования в 3 раза быстрее стандартных сроков"
    },
    {
      icon: "Shield",
      title: "Гарантия результата",
      description: "100% гарантия получения всех необходимых согласований"
    },
    {
      icon: "Users",
      title: "Опыт 15+ лет",
      description: "Более 1000 успешно реализованных проектов"
    },
    {
      icon: "Trophy",
      title: "Эксперт отрасли",
      description: "Признанный эксперт в области согласований и лицензирования"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative px-6 py-20 text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 via-turquoise-400/10 to-navy-500/10"></div>
        <div className="relative max-w-6xl mx-auto">
          <Badge className="mb-6 bg-orange-400 text-white hover:bg-orange-500 animate-fade-in">
            🔥 Ограниченное предложение до 31 августа
          </Badge>
          <h1 className="text-5xl md:text-7xl font-montserrat font-bold text-gray-900 mb-6 animate-fade-in">
            Пакеты согласований
            <span className="block text-orange-400">от Сергея Зубова</span>
          </h1>
          <p className="text-xl md:text-2xl font-open text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in">
            Получите все необходимые согласования для вашего проекта быстро и без проблем. 
            Более 15 лет опыта и 1000+ успешных кейсов.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Button 
              size="lg" 
              className="bg-orange-400 hover:bg-orange-500 text-white font-montserrat font-semibold px-8 py-4 text-lg animate-pulse-glow"
            >
              <Icon name="Phone" className="mr-2" />
              Получить консультацию
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-orange-400 text-orange-400 hover:bg-orange-50 font-montserrat font-semibold px-8 py-4 text-lg"
            >
              <Icon name="FileText" className="mr-2" />
              Смотреть кейсы
            </Button>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-gray-900 mb-4">
              Выберите свой пакет
            </h2>
            <p className="text-xl font-open text-gray-600 max-w-2xl mx-auto">
              Три готовых решения для проектов любого масштаба
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card 
                key={pkg.name} 
                className={`relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  pkg.popular 
                    ? 'ring-4 ring-orange-400 shadow-2xl transform scale-105' 
                    : 'hover:shadow-xl'
                } animate-fade-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-orange-400 to-orange-500 text-white px-4 py-2 text-sm font-montserrat font-bold">
                    <Icon name="Star" className="inline w-4 h-4 mr-1" />
                    ПОПУЛЯРНЫЙ
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 ${
                    pkg.color === 'orange' ? 'bg-gradient-to-br from-orange-400 to-orange-500' :
                    pkg.color === 'turquoise' ? 'bg-gradient-to-br from-turquoise-400 to-turquoise-500' :
                    'bg-gradient-to-br from-navy-500 to-navy-600'
                  }`}>
                    <Icon 
                      name={pkg.color === 'orange' ? 'Crown' : pkg.color === 'turquoise' ? 'Zap' : 'Building2'} 
                      className="w-8 h-8 text-white" 
                    />
                  </div>
                  <CardTitle className="text-2xl font-montserrat font-bold text-gray-900">
                    {pkg.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600 font-open">
                    {pkg.description}
                  </CardDescription>
                  <div className="flex items-center justify-center gap-2 mt-4">
                    <span className="text-3xl font-montserrat font-bold text-gray-900">
                      {pkg.price}
                    </span>
                    <span className="text-lg text-gray-500 line-through">
                      {pkg.originalPrice}
                    </span>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Icon 
                          name="Check" 
                          className={`w-5 h-5 mt-0.5 ${
                            pkg.color === 'orange' ? 'text-orange-400' :
                            pkg.color === 'turquoise' ? 'text-turquoise-400' :
                            'text-navy-500'
                          }`} 
                        />
                        <span className="font-open text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full font-montserrat font-semibold py-3 text-lg ${
                      pkg.popular 
                        ? 'bg-orange-400 hover:bg-orange-500 text-white' 
                        : 'border-2 border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                    variant={pkg.popular ? "default" : "outline"}
                  >
                    {pkg.popular ? 'Выбрать пакет' : 'Подробнее'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-6 py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-gray-900 mb-4">
              Отзывы клиентов
            </h2>
            <p className="text-xl font-open text-gray-600">
              Что говорят о нашей работе
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.name} 
                className="bg-white/80 backdrop-blur hover:bg-white transition-all duration-300 hover:shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="font-open text-gray-700 mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-montserrat font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-montserrat font-semibold text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="font-open text-sm text-gray-600">
                        {testimonial.position}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-gray-900 mb-4">
              Преимущества работы с Сергеем Зубовым
            </h2>
            <p className="text-xl font-open text-gray-600">
              Почему выбирают именно нас
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div 
                key={advantage.title}
                className="text-center group hover:scale-105 transition-transform duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-orange-400 to-turquoise-400 rounded-full flex items-center justify-center group-hover:shadow-lg transition-shadow">
                  <Icon name={advantage.icon} className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-montserrat font-bold text-gray-900 mb-3">
                  {advantage.title}
                </h3>
                <p className="font-open text-gray-600">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-gradient-to-r from-orange-400 via-orange-500 to-turquoise-400">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <img 
              src="/img/162d24f2-cb9e-43d3-9dd5-2bdc670287c7.jpg" 
              alt="Сергей Зубов" 
              className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-white mb-6">
            Готовы начать?
          </h2>
          <p className="text-xl font-open text-white/90 mb-8 max-w-2xl mx-auto">
            Получите бесплатную консультацию и узнайте, как мы можем помочь с вашими согласованиями
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-orange-500 hover:bg-gray-100 font-montserrat font-bold px-8 py-4 text-lg"
            >
              <Icon name="Phone" className="mr-2" />
              +7 (999) 123-45-67
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-white text-white hover:bg-white/10 font-montserrat font-semibold px-8 py-4 text-lg"
            >
              <Icon name="Mail" className="mr-2" />
              Написать в Telegram
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}