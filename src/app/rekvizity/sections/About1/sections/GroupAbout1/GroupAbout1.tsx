'use client';

import React, { useMemo, useState } from "react";
import { Card, CardContent } from "../../../../../../components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../../../../../components/ui/collapsible";
import { Button } from "../../../../../../components/ui/button";
import { ReactElement } from 'react';
import Image from 'next/image';
import { Copy, Download, X } from "lucide-react";

// 🔹 Added: dialog (modal). Adjust path if your UI folder differs.
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
  DialogClose,
} from "../../../../../../components/ui/dialog";

export const GroupAbout1 = (): ReactElement => {
  // Certificate types data
  const certificateTypes = [
    {
      id: 1,
      items: ["Сертификаты соответствия", "Сертификаты качества"],
    },
    {
      id: 2,
      items: ["Сертификат пожарной безопасности", "Протоколы испытания"],
    },
  ];

  // 👉 Company details (replace with real values!)
  const company = {
    name: 'ООО «ГРАНД ТЕНТ»',
    legalAddress: '125047, г. Москва, ул. 1-я Тверская-Ямская, д. 23',
    actualAddress: '125047, г. Москва, ул. 1-я Тверская-Ямская, д. 23, оф. 12',
    inn: '7701234567',
    kpp: '770101001',
    ogrn: '1187746123456',
    okpo: '12345678',
    phone: '+7 (495) 123-45-67',
    email: 'info@grand-tent.ru',
    accountingEmail: 'buh@grand-tent.ru',
    bank: {
      name: 'ПАО «Сбербанк»',
      bik: '044525225',
      corr: '30101810400000000225',
      account: '40702810600000001234',
    },
    site: 'https://grand-tent.ru',
    pdfUrl: '/files/rekvizity.pdf', // put your pdf into /public/files/
  };

  const allDetailsText = useMemo(() => {
    const b = company.bank;
    return [
      `${company.name}`,
      `Юр. адрес: ${company.legalAddress}`,
      `Факт. адрес: ${company.actualAddress}`,
      `ИНН/КПП: ${company.inn} / ${company.kpp}`,
      `ОГРН: ${company.ogrn}`,
      `ОКПО: ${company.okpo}`,
      `Банк: ${b.name}`,
      `БИК: ${b.bik}`,
      `Корр. счёт: ${b.corr}`,
      `Р/с: ${b.account}`,
      `Тел.: ${company.phone}`,
      `E-mail: ${company.email}`,
      `Бухгалтерия: ${company.accountingEmail}`,
      `Сайт: ${company.site}`,
    ].join('\n');
  }, [company]);

  const [copied, setCopied] = useState(false);
  const handleCopyAll = async () => {
    try {
      await navigator.clipboard.writeText(allDetailsText);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  // 🔹 Added: dialog open state
  const [open, setOpen] = useState(false);

  // 🔹 Reusable details grid for the modal (content reused 1:1)
  const DetailsGrid = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-sm text-[#394355] [font-family:'Raleway',Helvetica]">
      <div className="opacity-70">Наименование</div>
      <div className="font-medium">{company.name}</div>

      <div className="opacity-70">Юридический адрес</div>
      <div className="font-medium">{company.legalAddress}</div>

      <div className="opacity-70">Фактический адрес</div>
      <div className="font-medium">{company.actualAddress}</div>

      <div className="opacity-70">ИНН / КПП</div>
      <div className="font-medium">{company.inn} / {company.kpp}</div>

      <div className="opacity-70">ОГРН</div>
      <div className="font-medium">{company.ogrn}</div>

      <div className="opacity-70">ОКПО</div>
      <div className="font-medium">{company.okpo}</div>

      <div className="opacity-70">Банк</div>
      <div className="font-medium">{company.bank.name}</div>

      <div className="opacity-70">БИК</div>
      <div className="font-medium">{company.bank.bik}</div>

      <div className="opacity-70">Корр. счёт</div>
      <div className="font-medium">{company.bank.corr}</div>

      <div className="opacity-70">Расчётный счёт</div>
      <div className="font-medium">{company.bank.account}</div>

      <div className="opacity-70">Телефон</div>
      <div className="font-medium">{company.phone}</div>

      <div className="opacity-70">E-mail</div>
      <div className="font-medium">{company.email}</div>

      <div className="opacity-70">Бухгалтерия</div>
      <div className="font-medium">{company.accountingEmail}</div>

      <div className="opacity-70">Сайт</div>
      <div className="font-medium">
        <a href={company.site} target="_blank" rel="noopener noreferrer" className="underline text-[#527dc5]">
          {company.site}
        </a>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Version */}
      <main className="relative top-[600px] hidden md:block">
        <div className="w-full py-8">
          <Card className="relative rounded-[20px] border-0 shadow-[0px_24px_38px_0px_rgba(22,29,36,0.08)] backdrop-blur-[158px]" >
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row">
                <div className="p-8 md:w-1/2 flex flex-col gap-12">
                  <div className="flex flex-col gap-[34px]">
                    <div className="flex flex-col gap-9">
                      <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-3">
                          <h2 className="font-semibold text-4xl [font-family:'Raleway',Helvetica]">
                            <span className="text-[#232c42]">
                              Работаем полностью
                            </span>
                            <span className="text-[#527dc5]"> официально</span>
                          </h2>
                        </div>
                        <p className="font-medium text-[#394355] text-base leading-6 [font-family:'Raleway',Helvetica]">
                          с выдачей всех необходимых документов
                        </p>
                      </div>

                      <div className="flex flex-col gap-6">
                        <h3 className="font-bold text-xl leading-6 [font-family:'Raleway',Helvetica]">
                          <span className="text-[#527dc5]">Сертификаты</span>
                          <span className="text-[#232c42]"> на комплектующие</span>
                        </h3>

                        <div className="flex flex-wrap gap-6">
                          {certificateTypes.map((column) => (
                            <div
                              key={column.id}
                              className="font-normal text-[#394355] text-lg leading-6 [font-family:'Raleway',Helvetica]"
                            >
                              {column.items.map((item, index) => (
                                <React.Fragment key={index}>
                                  {item}
                                  {index < column.items.length - 1 && <br />}
                                </React.Fragment>
                              ))}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Реквизиты компании (ОРИГИНАЛ) */}
                    <Collapsible className="w-[460px]">
                      <CollapsibleTrigger
                        className="flex justify-between items-center w-full px-4 py-3 rounded-lg border-2 border-solid border-[#dddddd] hover:bg-[#f8f9ff] transition-colors"
                        aria-label="Показать реквизиты компании"
                        // 🔹 Added: open the modal on click, but keep original trigger intact
                        onClick={() => setOpen(true)}
                      >
                        <span className="font-medium text-[#394355] text-base leading-6 [font-family:'Raleway',Helvetica]">
                          Реквизиты компании
                        </span>
                        <Image
                          alt="Arrow"
                          src="/About1-arrow-2.webp"
                          width={15}
                          height={8}
                          loading="lazy"
                          className="w-[15px] h-2 transition-transform duration-300 data-[state=open]:rotate-180"
                        />
                      </CollapsibleTrigger>

                      {/* 🔹 Kept exactly; visually hidden to avoid duplicate UI */}
                      <CollapsibleContent className="mt-4 sr-only">
                        {/* Actions */}
                        <div className="flex items-center gap-3 mb-4">
                          <Button
                            size="sm"
                            variant="secondary"
                            onClick={handleCopyAll}
                            className="rounded-md"
                            aria-label="Скопировать все реквизиты"
                          >
                            <Copy className="w-4 h-4 mr-2" />
                            {copied ? 'Скопировано!' : 'Скопировать всё'}
                          </Button>

                          <Button
                            size="sm"
                            variant="secondary"
                            className="rounded-md"
                            asChild
                            aria-label="Скачать реквизиты в PDF"
                          >
                            <a href={company.pdfUrl} download>
                              <Download className="w-4 h-4 mr-2" />
                              Скачать PDF
                            </a>
                          </Button>
                        </div>

                        {/* Details */}
                        <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm text-[#394355] [font-family:'Raleway',Helvetica]">
                          <div className="opacity-70">Наименование</div>
                          <div className="font-medium">{company.name}</div>

                          <div className="opacity-70">Юридический адрес</div>
                          <div className="font-medium">{company.legalAddress}</div>

                          <div className="opacity-70">Фактический адрес</div>
                          <div className="font-medium">{company.actualAddress}</div>

                          <div className="opacity-70">ИНН / КПП</div>
                          <div className="font-medium">{company.inn} / {company.kpp}</div>

                          <div className="opacity-70">ОГРН</div>
                          <div className="font-medium">{company.ogrn}</div>

                          <div className="opacity-70">ОКПО</div>
                          <div className="font-medium">{company.okpo}</div>

                          <div className="opacity-70">Банк</div>
                          <div className="font-medium">{company.bank.name}</div>

                          <div className="opacity-70">БИК</div>
                          <div className="font-medium">{company.bank.bik}</div>

                          <div className="opacity-70">Корр. счёт</div>
                          <div className="font-medium">{company.bank.corr}</div>

                          <div className="opacity-70">Расчётный счёт</div>
                          <div className="font-medium">{company.bank.account}</div>

                          <div className="opacity-70">Телефон</div>
                          <div className="font-medium">{company.phone}</div>

                          <div className="opacity-70">E-mail</div>
                          <div className="font-medium">{company.email}</div>

                          <div className="opacity-70">Бухгалтерия</div>
                          <div className="font-medium">{company.accountingEmail}</div>

                          <div className="opacity-70">Сайт</div>
                          <div className="font-medium">
                            <a href={company.site} target="_blank" rel="noopener noreferrer" className="underline text-[#527dc5]">
                              {company.site}
                            </a>
                          </div>
                        </div>

                        <p className="mt-4 text-xs text-[#6b7280]">
                          Проверьте корректность реквизитов перед оплатой. При необходимости вышлем счёт и закрывающие документы.
                        </p>
                      </CollapsibleContent>
                    </Collapsible>

                    {/* 🔹 Added: actual modal opened by the same button above */}
                    <Dialog open={open} onOpenChange={setOpen}>
                      {/* Keeping a trigger here to satisfy Dialog API; not visible/used */}
                      <DialogTrigger asChild>
                        <span className="hidden" />
                      </DialogTrigger>

                      <DialogContent className="max-w-[700px] md:max-w-[760px] p-0 overflow-hidden">
                        <div className="p-6">
                          <DialogHeader className="mb-4">
                            <DialogTitle className="text-xl md:text-2xl [font-family:'Raleway',Helvetica]">
                              Реквизиты компании
                            </DialogTitle>
                          </DialogHeader>

                          {/* Actions */}
                          <div className="flex items-center gap-3 mb-5">
                            <Button
                              size="sm"
                              variant="secondary"
                              onClick={handleCopyAll}
                              className="rounded-md"
                              aria-label="Скопировать все реквизиты"
                            >
                              <Copy className="w-4 h-4 mr-2" />
                              {copied ? 'Скопировано!' : 'Скопировать всё'}
                            </Button>

                            <Button
                              size="sm"
                              variant="secondary"
                              className="rounded-md"
                              asChild
                              aria-label="Скачать реквизиты в PDF"
                            >
                              <a href={company.pdfUrl} download>
                                <Download className="w-4 h-4 mr-2" />
                                Скачать PDF
                              </a>
                            </Button>
                          </div>

                          {/* Details */}
                          <div className="max-h-[60vh] overflow-auto pr-2">
                            <DetailsGrid />
                            <p className="mt-4 text-xs text-[#6b7280]">
                              Проверьте корректность реквизитов перед оплатой. При необходимости вышлем счёт и закрывающие документы.
                            </p>
                          </div>

                          <DialogFooter className="mt-6">
                            <DialogClose asChild>
                              <Button variant="secondary" className="rounded-md">
                                Закрыть
                              </Button>
                            </DialogClose>
                          </DialogFooter>
                        </div>

                        <DialogClose
                          aria-label="Close"
                          className="absolute right-4 top-4 inline-flex items-center justify-center rounded-md"
                        >
                          <X className="h-5 w-5 opacity-70 hover:opacity-100" />
                        </DialogClose>
                      </DialogContent>
                    </Dialog>

                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-[10px] [background:linear-gradient(159deg,rgba(36,48,87,1)_0%,rgba(55,66,85,1)_100%)]">
                    <div className="relative w-[25px] h-[25px]">
                      <Image
                        className="absolute top-1 left-[3px]"
                        alt="Group"
                        src="/About1-group-25.webp"
                        width={19}
                        height={16}
                        loading="lazy"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <h3 className="font-bold text-white text-xl leading-6 [font-family:'Raleway',Helvetica]">
                        Работаем с любыми видами бизнеса
                      </h3>
                      <p className="font-normal text-white text-lg leading-6 [font-family:'Raleway',Helvetica]">
                        и методами оплаты: ИП, ООО, НДС, счета, безнал, карты и пр.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="md:w-1/2 flex items-center justify-center">
                  <Image
                    className="max-w-full h-auto"
                    alt="Element"
                    src="/About1-15-9bf6ff67-------1.webp"
                    width={600}
                    height={400}
                    loading="lazy"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Mobile Version */}
      <main className="relative top-[20px] block md:hidden">
        <div className="w-full py-4 px-4">
          <Card className="relative rounded-[20px] border-0 shadow-[0px_24px_38px_0px_rgba(22,29,36,0.08)] backdrop-blur-[158px]">
            <CardContent className="p-0">
              <div className="flex flex-col">
                
                {/* текст */}
                <div className="p-5 flex flex-col gap-6">
                  <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-3">
                      <div className="flex flex-col gap-2">
                        <h2 className="font-semibold text-2xl text-left [font-family:'Raleway',Helvetica]">
                          <span className="text-[#232c42]">
                            Работаем полностью
                          </span>
                          <span className="text-[#527dc5]"> официально</span>
                        </h2>
                      </div>
                      <p className="font-medium text-[#394355] text-sm text-left leading-5 [font-family:'Raleway',Helvetica]">
                        с выдачей всех необходимых документов
                      </p>
                    </div>

                    <div className="flex flex-col gap-4">
                      <h3 className="font-bold text-lg text-left leading-5 [font-family:'Raleway',Helvetica]">
                        <span className="text-[#527dc5]">Сертификаты</span>
                        <span className="text-[#232c42]"> на комплектующие</span>
                      </h3>

                      <div className="flex flex-col gap-3 items-start">
                        <div className="font-normal text-[#394355] text-base text-left leading-5 [font-family:'Raleway',Helvetica]">
                          Сертификаты соответствия<br />Сертификаты качества
                        </div>
                        <div className="font-normal text-[#394355] text-base text-left leading-5 [font-family:'Raleway',Helvetica]">
                          Сертификат пожарной безопасности<br />Протоколы испытания
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* картинка */}
                <div className="w-full flex items-center justify-center pb-4">
                  <Image
                    className="w-full max-w-[280px] h-auto"
                    alt="Element"
                    src="/About1-15-9bf6ff67-------1.webp"
                    width={280}
                    height={180}
                    loading="lazy"
                  />
                </div>

                {/* Реквизиты + баннер */}
                <div className="p-5 flex flex-col gap-6 pt-0">
                  <Collapsible className="w-full">
                    <CollapsibleTrigger
                      className="flex justify-between items-center w-full p-3 rounded-lg border-2 border-solid border-[#dddddd] hover:bg-[#f8f9ff] transition-colors"
                      aria-label="Показать реквизиты компании"
                      // 🔹 Added: open the same modal
                      onClick={() => setOpen(true)}
                    >
                      <span className="font-medium text-[#394355] text-sm leading-5 [font-family:'Raleway',Helvetica]">
                        Реквизиты компании
                      </span>
                      <Image
                        alt="Arrow"
                        src="/About1-arrow-2.webp"
                        width={12}
                        height={8}
                        loading="lazy"
                        className="w-[12px] h-2 transition-transform duration-300 data-[state=open]:rotate-180"
                      />
                    </CollapsibleTrigger>

                    {/* 🔹 Kept exactly; visually hidden to avoid duplicate UI */}
                    <CollapsibleContent className="mt-3 sr-only">
                      {/* Actions */}
                      <div className="flex items-center gap-2 mb-3">
                        <Button
                          size="sm"
                          variant="secondary"
                          onClick={handleCopyAll}
                          className="rounded-md"
                          aria-label="Скопировать все реквизиты"
                        >
                          <Copy className="w-4 h-4 mr-2" />
                          {copied ? 'Скопировано!' : 'Скопировать всё'}
                        </Button>

                        <Button
                          size="sm"
                          variant="secondary"
                          className="rounded-md"
                          asChild
                          aria-label="Скачать реквизиты в PDF"
                        >
                          <a href={company.pdfUrl} download>
                            <Download className="w-4 h-4 mr-2" />
                            PDF
                          </a>
                        </Button>
                      </div>

                      {/* Details (1-column on mobile) */}
                      <div className="grid grid-cols-1 gap-y-2 text-sm text-[#394355] [font-family:'Raleway',Helvetica]">
                        <div>
                          <div className="opacity-70">Наименование</div>
                          <div className="font-medium">{company.name}</div>
                        </div>
                        <div>
                          <div className="opacity-70">Юридический адрес</div>
                          <div className="font-medium">{company.legalAddress}</div>
                        </div>
                        <div>
                          <div className="opacity-70">Фактический адрес</div>
                          <div className="font-medium">{company.actualAddress}</div>
                        </div>
                        <div>
                          <div className="opacity-70">ИНН / КПП</div>
                          <div className="font-medium">{company.inn} / {company.kpp}</div>
                        </div>
                        <div>
                          <div className="opacity-70">ОГРН</div>
                          <div className="font-medium">{company.ogrn}</div>
                        </div>
                        <div>
                          <div className="opacity-70">ОКПО</div>
                          <div className="font-medium">{company.okpo}</div>
                        </div>
                        <div>
                          <div className="opacity-70">Банк</div>
                          <div className="font-medium">{company.bank.name}</div>
                        </div>
                        <div>
                          <div className="opacity-70">БИК</div>
                          <div className="font-medium">{company.bank.bik}</div>
                        </div>
                        <div>
                          <div className="opacity-70">Корр. счёт</div>
                          <div className="font-medium">{company.bank.corr}</div>
                        </div>
                        <div>
                          <div className="opacity-70">Расчётный счёт</div>
                          <div className="font-medium">{company.bank.account}</div>
                        </div>
                        <div>
                          <div className="opacity-70">Телефон</div>
                          <div className="font-medium">{company.phone}</div>
                        </div>
                        <div>
                          <div className="opacity-70">E-mail</div>
                          <div className="font-medium">{company.email}</div>
                        </div>
                        <div>
                          <div className="opacity-70">Бухгалтерия</div>
                          <div className="font-medium">{company.accountingEmail}</div>
                        </div>
                        <div>
                          <div className="opacity-70">Сайт</div>
                          <div className="font-medium">
                            <a href={company.site} target="_blank" rel="noopener noreferrer" className="underline text-[#527dc5]">
                              {company.site}
                            </a>
                          </div>
                        </div>
                      </div>

                      <p className="mt-3 text-xs text-[#6b7280]">
                        Проверьте корректность реквизитов перед оплатой. При необходимости вышлем счёт и закрывающие документы.
                      </p>
                    </CollapsibleContent>
                  </Collapsible>

                  {/* 🔹 Same single modal instance shared with desktop */}
                  <Dialog open={open} onOpenChange={setOpen}>
                    <DialogTrigger asChild>
                      <span className="hidden" />
                    </DialogTrigger>

                    <DialogContent className="max-w-[95vw] md:max-w-[760px] p-0 overflow-hidden">
                      <div className="p-5">
                        <DialogHeader className="mb-3">
                          <DialogTitle className="text-lg md:text-2xl [font-family:'Raleway',Helvetica]">
                            Реквизиты компании
                          </DialogTitle>
                        </DialogHeader>

                        {/* Actions */}
                        <div className="flex items-center gap-2 mb-3">
                          <Button
                            size="sm"
                            variant="secondary"
                            onClick={handleCopyAll}
                            className="rounded-md"
                            aria-label="Скопировать все реквизиты"
                          >
                            <Copy className="w-4 h-4 mr-2" />
                            {copied ? 'Скопировано!' : 'Скопировать всё'}
                          </Button>

                          <Button
                            size="sm"
                            variant="secondary"
                            className="rounded-md"
                            asChild
                            aria-label="Скачать реквизиты в PDF"
                          >
                            <a href={company.pdfUrl} download>
                              <Download className="w-4 h-4 mr-2" />
                              PDF
                            </a>
                          </Button>
                        </div>

                        <div className="max-h-[65vh] overflow-auto pr-1">
                          <DetailsGrid />
                          <p className="mt-3 text-xs text-[#6b7280]">
                            Проверьте корректность реквизитов перед оплатой. При необходимости вышлем счёт и закрывающие документы.
                          </p>
                        </div>

                        <DialogFooter className="mt-4">
                          <DialogClose asChild>
                            <Button variant="secondary" className="rounded-md w-full">
                              Закрыть
                            </Button>
                          </DialogClose>
                        </DialogFooter>
                      </div>

                      <DialogClose
                        aria-label="Close"
                        className="absolute right-4 top-4 inline-flex items-center justify-center rounded-md"
                      >
                        <X className="h-5 w-5 opacity-70 hover:opacity-100" />
                      </DialogClose>
                    </DialogContent>
                  </Dialog>

                  <div className="flex items-start gap-2 p-3 rounded-[8px] [background:linear-gradient(159deg,rgba(36,48,87,1)_0%,rgba(55,66,85,1)_100%)]">
                    <div className="relative w-[20px] h-[20px] min-w-[20px] mt-1">
                      <Image
                        className="absolute top-0.5 left-[2px]"
                        alt="Group"
                        src="/About1-group-25.webp"
                        width={16}
                        height={13}
                        loading="lazy"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="font-bold text-white text-base leading-5 [font-family:'Raleway',Helvetica]">
                        Работаем с любыми видами бизнеса
                      </h3>
                      <p className="font-normal text-white text-sm leading-5 [font-family:'Raleway',Helvetica]">
                        и методами оплаты: ИП, ООО, НДС, счета, безнал, карты и пр.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
};
