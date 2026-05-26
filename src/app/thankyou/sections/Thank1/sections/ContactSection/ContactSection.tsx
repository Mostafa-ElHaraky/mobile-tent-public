'use client';

import React, { useState, useEffect } from 'react';
import { Button } from "../../../../../../components/ui/button";
import { Checkbox } from "../../../../../../components/ui/checkbox";
import { Card, CardContent } from "../../../../../../components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../../../components/ui/select";
import Image from 'next/image';
import Header from '../../../../../../components/ui/Header';

// Types for our data
type TentType =
  | 'frame'
  | 'stretch'
  | 'inflatable'
  | 'marquee'
  | 'arched'   // added to match PROJECTS
  | 'mobile'   // added to match PROJECTS
  | 'pagoda'   // added to match PROJECTS
  | 'event';   // added to match PROJECTS

type TentArea = 'small' | 'medium' | 'large' | 'xlarge';
type EventType = 'wedding' | 'corporate' | 'festival' | 'exhibition' | 'sport';
type ConstructionType = 'tents' | 'hangars';

interface Project {
  id: number;
  title: string;
  city: string;
  area: string;
  image: string;
  type: TentType;
  event: EventType;
  construction: ConstructionType;
  actualArea: TentArea;
  // extra fields present in PROJECTS (make optional to satisfy TS)
  date?: string;
  link?: string;
  service?: string;
}

// Types for Bitrix contacts data
interface ContactsData {
  phone1: string;
  phone2: string;
  email: string;
  telegram: string;
  whatsapp: string;
  office: {
    name: string;
    address: string;
    map_url: string;
    hours: string;
    appointment: string;
  };
  production: {
    name: string;
    address: string;
    map_url: string;
    hours: string;
    appointment: string;
  };
}

// Default contact data as fallback
const defaultContacts: ContactsData = {
  phone1: '+7 (495) 760-42-20',
  phone2: '+7 (985) 760-42-20',
  email: 'info@mobile-tent.ru',
  telegram: 'https://t.me/+79857604220',
  whatsapp: 'https://max.ru/u/f9LHodD0cOK_6DAtIeOn3T51Xpzrkg2i4RB2ZEjtVfXOwvURhiW6gtGMLrA',
  office: {
    name: 'Офис г. Красногорск',
    address: 'Московская область, г. Красногорск, ул. Молодежная. д. 4',
    map_url: 'https://yandex.ru/maps/org/grand_tent/130300118530/?ll=37.269340%2C55.834305&z=17',
    hours: 'ПН - ПТ с 09:00 - 22:00 МСК',
    appointment: 'По предварительной записи',
  },
  production: {
    name: 'Производство г. Калуга',
    address: 'Калужская область, г. Калуга, ул. Производственная, д. 15',
    map_url: 'https://yandex.ru/maps/org/grand_tent/32724517904/?ll=36.261566%2C54.556269&z=17',
    hours: 'ПН - СБ с 08:00 - 20:00 МСК',
    appointment: 'По договоренности',
  }
};

// Props interface
interface ContactSectionProps {
  contacts?: ContactsData;
}

// Constants
const CONSTRUCTION_TYPES = [
  { id: 'tents', value: 'tents', label: 'Шатры' },
  { id: 'hangars', value: 'hangars', label: 'Ангары' },
];

const TENT_TYPE_OPTIONS = [
  { value: 'all', label: 'Все типы' },
  { value: 'frame', label: 'Каркасные' },
  { value: 'stretch', label: 'Тентовые' },
  { value: 'inflatable', label: 'Надувные' },
  { value: 'marquee', label: 'Маркизы' },
  { value: 'arched', label: 'Арочные' },      // added
  { value: 'mobile', label: 'Мобильные' },    // added
  { value: 'pagoda', label: 'Пагода' },       // added
  { value: 'event', label: 'Событийные' },    // added
];

const TENT_AREA_OPTIONS = [
  { value: 'all', label: 'Любая площадь' },
  { value: 'small', label: 'До 50 м²' },
  { value: 'medium', label: '50-100 м²' },
  { value: 'large', label: '100-200 м²' },
  { value: 'xlarge', label: 'Более 200 м²' },
];

const EVENT_TYPE_OPTIONS = [
  { value: 'all', label: 'Любое мероприятие' },
  { value: 'wedding', label: 'Свадьба' },
  { value: 'corporate', label: 'Корпоратив' },
  { value: 'festival', label: 'Фестиваль' },
  { value: 'exhibition', label: 'Выставка' },
  { value: 'sport', label: 'Спортивное' },
];

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Арочный шатер для «Ольшанец-Парк»",
    city: "—",
    area: "уточняйте у менеджера",
    image: "/761-arochnyy-shater-dlya-olshanec-park.webp",
    type: 'arched',
    event: 'corporate',
    construction: 'tents',
    actualArea: 'medium',
    date: "сб, 06/15/2019",
    link: "/our-projects/arochnyy-shater-dlya-olshanec-park",
    service: "Аренда, монтаж, демонтаж, отопление, освещение, меблирование, декорирование.",
  },
  {
    id: 2,
    title: "Шатёр для отеля «Байкальская резиденция»",
    city: "—",
    area: "18 м² (3×6 м)",
    image: "/20-shater-dlya-otelya-baykalskaya-rezidenciya.webp",
    type: 'mobile',
    event: 'corporate',
    construction: 'tents',
    actualArea: 'small',
    date: "вс, 06/05/2016",
    link: "/our-projects/shatyor-dlya-otelya-baykalskaya-rezidenciya",
    service: "Аренда, монтаж, демонтаж, отопление, освещение, меблирование, декорирование.",
  },
  {
    id: 3,
    title: "Шатры для выставок и ярмарок",
    city: "—",
    area: "уточняйте у менеджера",
    image: "/19-shatry-dlya-vystavok-i-yarmarok.webp",
    type: 'pagoda',
    event: 'exhibition',
    construction: 'tents',
    actualArea: 'medium',
    date: "вс, 06/05/2016",
    link: "/our-projects/shatry-dlya-vystavok-i-yarmarok",
    service: "Аренда, монтаж, демонтаж, отопление, освещение, меблирование, декорирование.",
  },
  {
    id: 4,
    title: "Шатры представительского класса в Архангельске",
    city: "Архангельск",
    area: "уточняйте у менеджера",
    image: "/18-shatry-predstavitelskogo-klassa-v-arhangelske.webp",
    type: 'event',
    event: 'corporate',
    construction: 'tents',
    actualArea: 'large',
    date: "вс, 06/05/2016",
    link: "/our-projects/shatry-predstavitelskogo-klassa-v-arhangelske",
    service: "Аренда, монтаж, демонтаж, отопление, освещение, меблирование, декорирование.",
  },
  {
    id: 5,
    title: "Шатёр для мероприятия Mercedes-Benz",
    city: "—",
    area: "уточняйте у менеджера",
    image: "/17-shater-dlya-meropriyatiya-mercedes-benz.webp",
    type: 'event',
    event: 'corporate',
    construction: 'tents',
    actualArea: 'large',
    date: "вс, 06/05/2016",
    link: "/our-projects/shatyor-dlya-meropriyatiya-mercedes-benz",
    service: "Аренда, монтаж, демонтаж, отопление, освещение, меблирование, декорирование.",
  },
  {
    id: 6,
    title: "Мобильный шатёр JACOBS",
    city: "—",
    area: "уточняйте у менеджера",
    image: "/16-mobilnyy-shater-jacobs.webp",
    type: 'mobile',
    event: 'corporate',
    construction: 'tents',
    actualArea: 'small',
    date: "чт, 05/05/2016",
    link: "/our-projects/mobilnyy-shatyor-jacobs",
    service: "Аренда, монтаж, демонтаж, отопление, освещение, меблирование, декорирование.",
  },
];

// Sub-components
const SelectField = ({ 
  label, 
  value, 
  options, 
  onChange 
}: { 
  label: string; 
  value: string; 
  options: { value: string; label: string }[]; 
  onChange: (value: string) => void 
}) => (
  <div>
    <label className="block text-sm font-medium text-[#394355] mb-2">
      {label}
    </label>
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-full h-12 p-3 rounded-lg border-2 border-[#dddddd] font-medium text-[#394355] bg-white">
        <SelectValue placeholder={`Выберите ${label.toLowerCase()}`} />
      </SelectTrigger>
      <SelectContent className="bg-white rounded-lg shadow-lg">
        {options.map(option => (
          <SelectItem 
            key={option.value} 
            value={option.value}
            className="hover:bg-gray-100 focus:bg-gray-100"
          >
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  </div>
);

const ProjectCard = ({ project }: { project: Project }) => (
  <a href={project.link || '#'} className="block">
    <Card className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all h-[309px] cursor-pointer hover:scale-105 transition-transform duration-200">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${project.image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-1" />
      <CardContent className="relative z-10 flex flex-col justify-between h-full p-6">
        <div className="space-y-5">
          <h3 className="font-semibold text-white text-xl">
            {project.title}
          </h3>
          <div className="space-y-1.5">
            <div className="flex gap-2">
              <span className="text-white">Город:</span>
              <span className="font-semibold text-white">{project.city}</span>
            </div>
            <div className="flex gap-2">
              <span className="text-white">Площадь:</span>
              <span className="font-semibold text-white">{project.area}</span>
            </div>
          </div>
        </div>
        <Button 
          variant="link" 
          className="text-white p-0 text-lg font-semibold self-start hover:no-underline hover:text-blue-200"
        >
          Подробнее
        </Button>
      </CardContent>
    </Card>
  </a>
);

const EmptyState = ({ onReset }: { onReset: () => void }) => (
  <div className="text-center py-16">
    <h3 className="text-xl font-medium text-[#394355] mb-4">Проекты не найдены</h3>
    <p className="text-[#6c757d] mb-6">Попробуйте изменить параметры фильтра</p>
    <Button 
      onClick={onReset} 
      className="bg-[#527dc5] hover:bg-[#3e63a0] text-white"
    >
      Сбросить фильтры
    </Button>
  </div>
);

// Mobile Project Card
const MobileProjectCard = ({ project }: { project: Project }) => (
  <a href={project.link || '#'} className="block">
    <Card className="relative overflow-hidden rounded-xl shadow-lg transition-all h-[250px] mb-4 cursor-pointer hover:scale-105 transition-transform duration-200">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${project.image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-1" />
      <CardContent className="relative z-10 flex flex-col justify-between h-full p-4">
        <div className="space-y-3">
          <h3 className="font-semibold text-white text-lg">
            {project.title}
          </h3>
          <div className="space-y-1">
            <div className="flex gap-2">
              <span className="text-white text-sm">Город:</span>
              <span className="font-semibold text-white text-sm">{project.city}</span>
            </div>
            <div className="flex gap-2">
              <span className="text-white text-sm">Площадь:</span>
              <span className="font-semibold text-white text-sm">{project.area}</span>
            </div>
          </div>
        </div>
        <Button variant="link" className="text-white p-0 text-base font-semibold self-start hover:no-underline hover:text-blue-200">
          Подробнее
        </Button>
      </CardContent>
    </Card>
  </a>
);

// Mobile Construction Type Filter
const MobileConstructionFilter = ({ 
  constructionTypes, 
  onConstructionChange 
}: { 
  constructionTypes: ConstructionType[]; 
  onConstructionChange: (type: ConstructionType) => void 
}) => (
  <div className="grid grid-cols-2 gap-3 mb-6">
    {CONSTRUCTION_TYPES.map(type => (
      <div
        key={type.id}
        className={`flex items-center justify-center p-3 rounded-lg border-2 cursor-pointer ${
          constructionTypes.includes(type.value as ConstructionType)
            ? 'border-[#527dc5] bg-blue-50'
            : 'border-[#dddddd] bg-white'
        }`}
        onClick={() => onConstructionChange(type.value as ConstructionType)}
      >
        <span className="font-medium text-[#394355] text-sm">
          {type.label}
        </span>
      </div>
    ))}
  </div>
);

// Helper function to format phone number for tel: link
const formatPhoneForLink = (phone: string) => {
  return phone.replace(/[\s\-\(\)]/g, '');
};

// Main component
export const ContactSection = ({ contacts = defaultContacts }: ContactSectionProps) => {
  // Use provided contacts or default
  const contactsData = contacts || defaultContacts;
  
  // State for filter controls
  const [constructionTypes, setConstructionTypes] = useState<ConstructionType[]>(['tents']);
  const [tentType, setTentType] = useState<string>('all');
  const [tentArea, setTentArea] = useState<string>('all');
  const [eventType, setEventType] = useState<string>('all');
  
  // State for filtered projects
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  
  // Filter projects whenever filter criteria change
  useEffect(() => {
    const filtered = PROJECTS.filter(project => {
      // Filter by construction type
      if (!constructionTypes.includes(project.construction)) return false;
      
      // Filter by tent type
      if (tentType !== 'all' && project.type !== (tentType as TentType)) return false;
      
      // Filter by tent area
      if (tentArea !== 'all' && project.actualArea !== (tentArea as TentArea)) return false;
      
      // Filter by event type
      if (eventType !== 'all' && project.event !== (eventType as EventType)) return false;
      
      return true;
    });
    
    setFilteredProjects(filtered);
  }, [constructionTypes, tentType, tentArea, eventType]);
  
  // Handle construction type checkbox changes
  const handleConstructionChange = (type: ConstructionType) => {
    setConstructionTypes(prev => 
      prev.includes(type) 
        ? prev.filter(t => t !== type) 
        : [...prev, type]
    );
  };
  
  // Reset all filters
  const resetFilters = () => {
    setConstructionTypes(['tents']);
    setTentType('all');
    setTentArea('all');
    setEventType('all');
  };

  return (
    <>    
      {/* Desktop Version */}
      <div className="hidden md:block relative w-full min-h-screen py-8 px-4 sm:px-8 ">
        
        <div className="relative top-[730px] right-8">
          <Header/>
        </div>
        
        {/* Thank You Section */}
        <section className="flex flex-col items-center justify-center gap-3 w-full py-8 mt-[-120]">
          <h2 className="text-4xl font-medium text-[#394355] font-raleway text-center">
            Благодарим, заявка принята
          </h2>

          <div className="mt-3">
            <Card className="rounded-lg bg-gradient-to-br from-[#243057] to-[#374255] border-none">
              <CardContent className="px-3 py-1.5">
                <p className="text-lg text-white font-normal leading-6 font-raleway">
                  В течении 15 минут свяжется эксперт
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Urgent Contact Card */}
        <Card className="w-full max-w-[552px] mx-auto bg-white border-0 rounded-[20px] shadow-[0px_24px_38px_0px_rgba(22,29,36,0.08)] backdrop-blur-[79px]">
          <CardContent className="p-6">
            <h2 className="text-center text-2xl font-semibold text-[#232c42] [font-family:'Raleway',Helvetica] mb-6">
              Если вопрос срочный
            </h2>

            <div className="flex flex-wrap justify-between gap-4">
              {/* Phone numbers section */}
              <div className="flex flex-col gap-3">
                <p className="font-medium text-[#4f5d80] text-base [font-family:'Raleway',Helvetica]">
                  Позвоните :
                </p>
                <div className="flex items-center gap-6">
                  {/* First phone number */}
                  <div className="flex items-center gap-2">
                    <div className="flex w-6 h-6 items-center justify-center rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec]">
                      <Image
                        src="/group-5.webp"
                        alt="Phone icon"
                        width={12}
                        height={12}
                      />
                    </div>
                    <a href={`tel:${formatPhoneForLink(contactsData.phone1)}`} className="text-[#394355] text-sm [font-family:'Raleway',Helvetica] hover:underline">
                      {contactsData.phone1}
                    </a>
                  </div>

                  {/* Second phone number */}
                  <div className="flex items-center gap-2">
                    <div className="flex w-6 h-6 items-center justify-center rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec]">
                      <Image
                        src="/group-5.webp"
                        alt="Phone icon"
                        width={12}
                        height={12}
                      />
                    </div>
                    <a href={`tel:${formatPhoneForLink(contactsData.phone2)}`} className="text-[#394355] text-sm [font-family:'Raleway',Helvetica] hover:underline">
                      {contactsData.phone2}
                    </a>
                  </div>
                </div>
              </div>

              {/* Message options section */}
              <div className="flex flex-col gap-3">
                <p className="font-medium text-[#4f5d80] text-base [font-family:'Raleway',Helvetica]">
                  Напишите:
                </p>
                <div className="inline-flex items-start gap-3 relative flex-[0_0_auto]">
                  <div className="relative w-6 h-6">
                    <a href={contactsData.telegram} target="_blank" rel="noopener noreferrer">
                      <Image
                        className="absolute top-[3px] left-0.5"
                        src="/group.webp"
                        alt="Telegram icon"
                        width={21}
                        height={18}
                      />
                    </a>
                  </div>

                  <div className="relative w-6 h-6">
                    <a href={contactsData.whatsapp} target="_blank" rel="noopener noreferrer">
                      <Image
                        className="absolute top-0.5 left-0.5"
                        src="/group-1.webp"
                        alt="WhatsApp icon"
                        width={20}
                        height={20}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Portfolio Section */}
        <div className="max-w-7xl mx-auto mt-8">
          {/* Visual heading for desktop - using H2 for proper hierarchy */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#232c42] mb-8 text-center">
            Пока можете посмотреть <span className="text-[#527DC5]">портфолио</span>
          </h2>

          {/* Filters */}
          <Card className="rounded-2xl border-0 p-6 mb-10 border-0 ">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Construction Type */}
              <div className="w-full md:w-1/4">
                <h3 className="text-lg font-semibold text-[#232c42] mb-4">Конструкция</h3>
                <div className="space-y-3">
                  {CONSTRUCTION_TYPES.map(type => (
                    <div key={type.id} className="flex items-center gap-3">
                      <Checkbox
                        id={type.id}
                        checked={constructionTypes.includes(type.value as ConstructionType)}
                        onCheckedChange={() => handleConstructionChange(type.value as ConstructionType)}
                        className="w-6 h-6 rounded-lg border-2 border-[#dddddd] data-[state=checked]:bg-[#527dc5]"
                      />
                      <label 
                        htmlFor={type.id} 
                        className="font-medium text-[#394355] cursor-pointer"
                      >
                        {type.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dropdown Filters */}
              <div className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <SelectField
                  label="Тип шатра"
                  value={tentType}
                  options={TENT_TYPE_OPTIONS}
                  onChange={setTentType}
                />
                <SelectField
                  label="Площадь шатра"
                  value={tentArea}
                  options={TENT_AREA_OPTIONS}
                  onChange={setTentArea}
                />
                <SelectField
                  label="Для какого мероприятия"
                  value={eventType}
                  options={EVENT_TYPE_OPTIONS}
                  onChange={setEventType}
                />
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <Button
                onClick={resetFilters}
                variant="link"
                className="text-[#527dc5] font-bold underline p-0"
              >
                Сбросить фильтр
              </Button>
            </div>
          </Card>

          {/* Projects Header */}
          <div className="mb-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <h3 className="text-xl font-semibold text-[#232c42]">
              {filteredProjects.length} проектов
            </h3>
            <div className="text-sm text-[#527dc5]">
              Показаны результаты по вашим фильтрам
            </div>
          </div>

          {/* Projects Grid */}
          {filteredProjects.length === 0 ? (
            <EmptyState onReset={resetFilters} />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}    
        </div>
      </div>

      {/* 📱 Mobile Version */}
      <div className="md:hidden w-full">

        {/* Header - always visible */}
        <div className="w-full px-4 sm:px-6 py-0">
          <Header />
        </div>

        {/* Thank You Section */}
        <section className="flex flex-col items-center justify-center gap-2 w-full px-4 sm:px-6 mt-[-100] ">
          <h2 className="text-2xl font-medium text-[#394355] font-raleway text-center">
            Благодарим, заявка принята
          </h2>

          <Card className="mt-2 w-full rounded-lg bg-gradient-to-br from-[#243057] to-[#374255] border-none">
            <CardContent className="px-4 py-2">
              <p className="text-sm text-white font-normal leading-5 font-raleway text-center">
                В течении 15 минут свяжется эксперт
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Urgent Contact Card */}
        <Card className="w-full mx-auto bg-white border-0 rounded-[20px] shadow-[0px_12px_24px_0px_rgba(22,29,36,0.08)] backdrop-blur-[50px] px-4 py-4 my-4">
          <CardContent>
            <h2 className="text-center text-xl font-semibold text-[#232c42] [font-family:'Raleway',Helvetica] mb-4">
              Если вопрос срочный
            </h2>

            <div className="flex flex-col gap-3">
              {/* Phone numbers */}
              <div className="flex flex-col gap-2">
                <p className="font-medium text-[#4f5d80] text-sm [font-family:'Raleway',Helvetica]">
                  Позвоните :
                </p>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <div className="flex w-6 h-6 items-center justify-center rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec]">
                      <Image src="/group-5.webp" alt="Phone icon" width={14} height={14} />
                    </div>
                    <a href={`tel:${formatPhoneForLink(contactsData.phone1)}`} className="text-[#394355] text-sm [font-family:'Raleway',Helvetica] hover:underline">
                      {contactsData.phone1}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex w-6 h-6 items-center justify-center rounded-full bg-gradient-to-b from-[#73a8ff] via-[#6fa7ff] to-[#3c6cec]">
                      <Image src="/group-5.webp" alt="Phone icon" width={14} height={14} />
                    </div>
                    <a href={`tel:${formatPhoneForLink(contactsData.phone2)}`} className="text-[#394355] text-sm [font-family:'Raleway',Helvetica] hover:underline">
                      {contactsData.phone2}
                    </a>
                  </div>
                </div>
              </div>

              {/* Message options */}
              <div className="flex flex-col gap-2">
                <p className="font-medium text-[#4f5d80] text-sm [font-family:'Raleway',Helvetica]">
                  Напишите:
                </p>
                <div className="flex gap-3">
                  <a href={contactsData.telegram} target="_blank" rel="noopener noreferrer">
                    <Image src="/group.webp" alt="Telegram icon" width={28} height={24} />
                  </a>
                  <a href={contactsData.whatsapp} target="_blank" rel="noopener noreferrer">
                    <Image src="/group-1.webp" alt="WhatsApp icon" width={26} height={26} />
                  </a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Portfolio Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-4">
          {/* Visual heading for mobile - using H2 for proper hierarchy */}
          <h2 className="text-2xl font-bold text-[#232c42] text-center">
            Пока можете посмотреть <span className="text-[#527DC5]">портфолио</span>
          </h2>

          {/* Filters */}
          <Card className="rounded-2xl border-0 p-4 space-y-4">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-[#232c42] mb-2">Конструкция</h3>
                <MobileConstructionFilter 
                  constructionTypes={constructionTypes} 
                  onConstructionChange={handleConstructionChange}
                />
              </div>
              <div className="grid grid-cols-1 gap-2">
                <SelectField label="Тип шатра" value={tentType} options={TENT_TYPE_OPTIONS} onChange={setTentType} />
                <SelectField label="Площадь шатра" value={tentArea} options={TENT_AREA_OPTIONS} onChange={setTentArea} />
                <SelectField label="Для какого мероприятия" value={eventType} options={EVENT_TYPE_OPTIONS} onChange={setEventType} />
              </div>
            </div>

            <div className="flex justify-end">
              <Button onClick={resetFilters} variant="link" className="text-[#527dc5] font-bold underline p-0">
                Сбросить фильтр
              </Button>
            </div>
          </Card>

          {/* Projects Header */}
          <div className="flex flex-col gap-1 text-center">
            <h3 className="text-lg font-semibold text-[#232c42]">{filteredProjects.length} проектов</h3>
            <div className="text-sm text-[#527dc5]">Показаны результаты по вашим фильтрам</div>
          </div>

          {/* Projects Grid */}
          {filteredProjects.length === 0 ? (
            <EmptyState onReset={resetFilters} />
          ) : (
            <div className="grid grid-cols-1 gap-4">
              {filteredProjects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};