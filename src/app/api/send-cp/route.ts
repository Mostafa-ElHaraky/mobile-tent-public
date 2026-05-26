// app/api/send-cp/route.ts
import { NextResponse } from 'next/server';

// ----- Helper functions (copied from your n8n node) -----
function formatCurrency(amount: number): string {
  if (!amount && amount !== 0) return '0 ₽';
  return new Intl.NumberFormat('ru-RU', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount) + ' ₽';
}

// ----- YOUR COMPLETE HTML TEMPLATE (paste exactly as in n8n) -----
// Copy the entire htmlTemplate string from your n8n node here.
// It must include all styles, placeholders like {{fullName}}, etc.
let htmlTemplate = `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Коммерческое предложение | MobileTent</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
<style>*{margin:0;padding:0;box-sizing:border-box}body{font-family:Raleway,sans-serif;background:#d9e0ec;display:flex;justify-content:center;align-items:center;min-height:100vh;padding:20px}.card{max-width:1200px;width:100%;background:linear-gradient(145deg,#EDF1F8 0%,#FFF 100%);border-radius:40px 40px 30px 30px;box-shadow:0 25px 50px -12px rgba(0,20,40,.25);padding:2rem 2rem 2.5rem;position:relative;overflow:hidden}.card::before{content:"";position:absolute;width:600px;height:400px;right:-150px;bottom:0;background:url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" opacity="0.15"><circle cx="200" cy="150" r="100" fill="white"/><circle cx="350" cy="100" r="130" fill="white"/><circle cx="450" cy="180" r="90" fill="white"/></svg>');background-size:cover;filter:blur(8px);pointer-events:none;z-index:0}.header{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:20px 30px;margin-bottom:30px;position:relative;z-index:2}.logo-area{display:flex;align-items:center;gap:10px}.logo-icon{font-size:28px;color:#4F5D80;letter-spacing:-1px;font-weight:600}.logo-text{font-weight:600;font-size:1.3rem;color:#2c3a5e;background:rgba(255,255,255,.5);padding:5px 12px;border-radius:40px;backdrop-filter:blur(4px)}.contacts{display:flex;flex-wrap:wrap;gap:20px 30px;align-items:center}.contact-item{display:flex;align-items:center;gap:10px}.contact-icon{width:38px;height:38px;background:linear-gradient(145deg,#73A8FF,#3C6CEC);border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:1rem;box-shadow:0 8px 14px -6px #3C6CEC60}.contact-text{font-weight:500;font-size:1rem;color:#1f2a41;white-space:nowrap}.contact-text small{font-weight:400;font-size:.85rem;color:#4a5a7a;display:block}.main-title{font-weight:600;font-size:clamp(1.8rem,5vw,3rem);line-height:1.2;text-transform:uppercase;color:#335EC3;margin:20px 0 10px;position:relative;z-index:2;max-width:900px}.project-bar{background:linear-gradient(90deg,#73A8FF,#3C6CEC);border-radius:40px;padding:.8rem 2rem;display:inline-block;margin:15px 0 25px;box-shadow:0 15px 25px -10px #1e3a8a50;position:relative;z-index:2;width:auto;max-width:100%}.project-bar span{font-weight:600;font-size:clamp(1rem,3vw,1.4rem);color:#fff;letter-spacing:.3px}.info-grid{display:grid;grid-template-columns:1fr 1.2fr;gap:25px;margin:30px 0 20px;position:relative;z-index:2}.info-card{background:rgba(255,255,255,.75);backdrop-filter:blur(10px);border-radius:32px;padding:1.8rem;box-shadow:0 20px 35px -12px rgba(22,29,36,.12);border:1px solid rgba(255,255,255,.5)}.card-title{font-weight:700;font-size:1.4rem;color:#1a2942;margin-bottom:1.2rem;display:flex;align-items:center;gap:8px}.card-title i{color:#3C6CEC;font-size:1.6rem}.description-text{font-weight:500;font-size:.95rem;line-height:1.6;color:#1f2c3f;max-width:550px}.chars-grid{display:grid;grid-template-columns:auto 1fr;gap:12px 16px;font-size:.9rem;align-items:baseline}.chars-label{font-weight:500;color:#1f2c3f;white-space:nowrap}.chars-value{font-weight:600;color:#113255}.chars-value small{font-weight:400;font-size:.8rem;color:#4a5a7a}.footer-note{margin-top:40px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:15px;font-size:.9rem;color:#2a3b5a;border-top:2px dashed rgba(60,108,236,.2);padding-top:20px;position:relative;z-index:2}.footer-note i{color:#3C6CEC;margin-right:6px}@media (max-width:800px){.card{padding:1.5rem}.header{flex-direction:column;align-items:flex-start}.contacts{width:100%;justify-content:space-between}.contact-item .contact-text{font-size:.9rem;white-space:normal}.info-grid{grid-template-columns:1fr}.project-bar{width:100%;text-align:center;padding:.8rem 1rem}.chars-grid{grid-template-columns:1fr;gap:8px 0}.chars-label{margin-top:8px;font-weight:600}.chars-label::after{content:":"}}@media (max-width:500px){.contacts{flex-direction:column;align-items:flex-start;gap:12px}.contact-item{width:100%}.main-title{font-size:1.8rem}}.badge{background:#EDF1F8;border-radius:60px;padding:.2rem .8rem;font-weight:500;font-size:.8rem}.timeline-bar{background:#4F5D80;border-radius:20px;padding:1.2rem 2rem;margin-bottom:2rem;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;color:#fff;box-shadow:0 12px 22px -10px #2e3a5a}.timeline-left{display:flex;flex-wrap:wrap;align-items:baseline;gap:10px 20px}.timeline-label{font-weight:500;font-size:1.2rem;letter-spacing:.3px}.timeline-days{font-weight:800;font-size:1.8rem;line-height:1.2;background:rgba(255,255,255,.15);padding:.2rem 1rem;border-radius:60px}.timeline-note{display:flex;align-items:center;gap:8px;font-weight:400;font-size:.9rem;color:rgba(255,255,255,.9)}.timeline-note i{font-size:1.2rem;color:#c6dcff}.icon-box{width:24px;height:24px;background:linear-gradient(145deg,#73A8FF,#3C6CEC);border-radius:8px;display:inline-flex;align-items:center;justify-content:center;color:#fff;font-size:.8rem}.offer-header{margin-bottom:2rem}.offer-header h2{font-weight:700;font-size:2.2rem;color:#232C42;margin-bottom:.3rem}.price-validity{font-style:italic;font-weight:400;font-size:.9rem;color:#FF6F6F;background:rgba(255,111,111,.05);display:inline-block;padding:.3rem 1.2rem;border-radius:60px;border-left:4px solid #FF6F6F}.cards-stack{display:flex;flex-direction:column;gap:30px;margin-top:30px}.variant-card{position:relative;background:#FFF;border:1px solid #DDD;border-radius:20px;box-shadow:0 24px 38px rgba(22,29,36,.08);backdrop-filter:blur(79px);padding:17px 17px 17px 23px;display:flex;flex-direction:row;gap:30px;transition:transform .2s;width:100%}.variant-card:hover{transform:translateY(-5px)}.sphere-badge{position:absolute;left:-13px;top:-7px;background:#FFF;border-radius:50px;padding:8px 14px;font-weight:600;font-size:14px;line-height:16px;color:#232C42;box-shadow:0 4px 10px rgba(0,0,0,.05);border:1px solid #f0f0f0;z-index:10}.card-image{flex:0 0 221px;height:124px;background:#c1d0ec;border-radius:16px;display:flex;align-items:center;justify-content:center;background-image:linear-gradient(145deg,#a5b9da,#b8caec);color:#2a3f6e;font-size:.9rem;font-weight:600;box-shadow:inset 0 2px 8px rgba(0,0,0,.05)}.image-placeholder{display:flex;flex-direction:column;align-items:center;gap:6px}.image-placeholder i{font-size:2.8rem;opacity:.5}.card-content{flex:1;display:flex;flex-direction:row;gap:70px;align-items:flex-start;justify-content:flex-end}.desc-col{display:flex;flex-direction:column;gap:10px;min-width:200px}.desc-title{font-weight:700;font-size:14px;line-height:24px;color:#394355}.specs-grid{display:flex;flex-direction:column;gap:8px}.spec-row{display:flex;align-items:baseline;gap:8px;font-size:10px;line-height:18px;color:#394355}.spec-label{font-weight:400;white-space:nowrap}.spec-value{font-weight:500}.qty-col{display:flex;flex-direction:column;gap:10px;min-width:60px}.qty-head{font-weight:700;font-size:14px;line-height:24px;color:#394355}.qty-number{font-weight:500;font-size:10px;line-height:18px;color:#394355}.price-col{display:flex;flex-direction:column;gap:10px;min-width:70px}.price-head{font-weight:700;font-size:14px;line-height:24px;color:#394355}.price-value{font-weight:700;font-size:10px;line-height:18px;color:#394355;white-space:nowrap}.cost-breakdown{margin-top:50px;border-top:2px dashed #ccd7ec;padding-top:30px}.cost-title{font-weight:700;font-size:1.8rem;color:#232C42;margin-bottom:25px}.cost-table{background:#F8FAFE;border-radius:28px;padding:20px 30px;border:1px solid #E6ECF5;box-shadow:0 12px 24px -12px rgba(22,29,36,.1)}.cost-row{display:flex;align-items:center;justify-content:space-between;padding:16px 0;border-bottom:1px solid #DAE2F0}.cost-row:last-child{border-bottom:none}.cost-item{display:flex;align-items:baseline;gap:15px;flex-wrap:wrap}.cost-name{font-weight:600;font-size:1.2rem;color:#1F2A44;min-width:200px}.cost-price{font-weight:700;font-size:1.4rem;color:#1E3A8A;letter-spacing:.5px}.cost-unit{font-weight:500;font-size:1rem;color:#64748B;margin-left:10px}@media (max-width:1100px){.card-content{gap:30px;flex-wrap:wrap}}@media (max-width:800px){.variant-card{flex-wrap:wrap;padding:20px}.card-image{flex-basis:100%;height:140px}.card-content{flex-direction:column;gap:20px;width:100%}.desc-col,.qty-col,.price-col{width:100%}.sphere-badge{left:-5px;top:-5px}.cost-row{flex-direction:column;align-items:flex-start;gap:8px}.cost-item{flex-wrap:wrap}}@media (max-width:500px){.timeline-bar{flex-direction:column;align-items:flex-start;gap:10px}.cost-name{min-width:auto}}.main-title{font-weight:600;font-size:2rem;line-height:1.2;color:#232C42;margin-bottom:2rem}.cards-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:30px;margin-bottom:60px}.benefit-card{display:flex;background:#FFF;border-radius:30px;box-shadow:0 24px 38px rgba(22,29,36,.08);backdrop-filter:blur(79px);overflow:hidden;transition:transform .2s}.benefit-card:hover{transform:translateY(-5px)}.card-icon{width:90px;background:linear-gradient(145deg,#73A8FF,#3C6CEC);display:flex;align-items:center;justify-content:center;color:#fff;font-size:2.4rem;border-radius:30px 0 0 30px}.card-text{flex:1;padding:20px 22px 20px 20px}.card-title{font-weight:700;font-size:.9rem;line-height:1.4;color:#232C42;margin-bottom:6px}.card-desc{font-weight:400;font-size:.7rem;line-height:1.6;color:#394355}.warranty-block{background:linear-gradient(180deg,#73A8FF 0%,#6FA7FF 36.5%,#3C6CEC 100%);border:3px solid rgba(255,255,255,.25);box-shadow:0 22px 44px rgba(32,124,254,.4);border-radius:30px;padding:2.2rem 2.5rem;color:#fff}.warranty-title{font-weight:700;font-size:1.8rem;text-transform:uppercase;margin-bottom:1.8rem;letter-spacing:1px}.warranty-items{display:flex;flex-wrap:wrap;gap:3rem 4rem;align-items:flex-start}.warranty-item{display:flex;flex-direction:column;gap:6px;min-width:100px}.warranty-years{font-weight:700;font-size:2rem;line-height:1.2;white-space:nowrap}.warranty-label{font-weight:400;line-height:1.2;opacity:.95}@media (max-width:900px){.cards-grid{grid-template-columns:1fr;gap:25px}.warranty-items{gap:2rem}}@media (max-width:600px){.document{padding:1.5rem}.main-title{font-size:1.8rem}.benefit-card{flex-direction:column}.card-icon{width:100%;height:80px;border-radius:30px 30px 0 0}.warranty-items{flex-direction:column;gap:1.5rem}.warranty-years{font-size:1.8rem}}.small-note{font-size:.7rem;color:#394355;margin-top:20px;text-align:right}.main-title{font-weight:600;font-size:2rem;line-height:1.2;color:#232C42;margin-bottom:2.5rem}.stages-container{display:flex;flex-direction:row;gap:30px;align-items:stretch}.stages-column{flex:1;display:flex;flex-direction:column;gap:18px}.divider-bar{width:50px;background:linear-gradient(180deg,#1F2A44,#2A3650);border-radius:30px;display:flex;flex-direction:column;align-items:center;justify-content:space-around;padding:15px 0;box-shadow:0 10px 20px rgba(0,0,0,.2)}.divider-bar .ball-text{color:#fff;font-weight:600;font-size:.9rem;writing-mode:vertical-rl;text-orientation:mixed;transform:rotate(180deg);white-space:nowrap;opacity:.8;letter-spacing:2px}.stage-card{background:#FFF;border-radius:20px;box-shadow:0 24px 38px rgba(22,29,36,.08);backdrop-filter:blur(79px);padding:20px;display:flex;flex-direction:row;gap:15px;position:relative;transition:transform .2s;border:1px solid #f0f3fa}.stage-card:hover{transform:translateY(-5px)}.stage-left{position:relative;width:100px;display:flex;flex-direction:column;align-items:center;justify-content:center}.stage-number{font-weight:700;font-size:2.8rem;line-height:1;background:linear-gradient(145deg,#232C42,#5B647A);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;text-shadow:0 4px 20px rgba(0,0,0,.1);margin-bottom:5px}.stage-icon{width:70px;height:70px;background:rgba(222,228,240,.5);border-radius:50%;display:flex;align-items:center;justify-content:center;color:#2A3F6E;font-size:2rem}.stage-desc{flex:1;display:flex;flex-direction:column;justify-content:center}.stage-title{font-weight:700;font-size:1rem;line-height:1.4;color:#232C42;margin-bottom:6px}.stage-sub{font-weight:400;font-size:.7rem;line-height:1.4;color:#394355}.stage-left::before{content:'';position:absolute;width:120px;height:120px;background:rgba(222,228,240,.3);border-radius:50%;top:50%;left:50%;transform:translate(-50%,-50%);z-index:0}@media (max-width:900px){.stages-container{flex-direction:column}.divider-bar{width:100%;height:50px;flex-direction:row;padding:0 15px;border-radius:30px}.divider-bar .ball-text{writing-mode:horizontal-tb;transform:none;font-size:1rem;margin:0 10px}.stages-column{width:100%}}@media (max-width:600px){.stage-card{flex-direction:column;align-items:center;text-align:center}.stage-left::before{width:100px;height:100px}}.divider-bar .ball-text::before,.divider-bar .ball-text::after{content:'';display:block;width:20px;height:20px;background:rgba(255,255,255,.2);margin:10px 0;border-radius:50%}.section-title{font-weight:600;font-size:1.8rem;line-height:1.2;color:#232C42;margin-bottom:1.8rem}.team-stats{background:linear-gradient(165deg,#73A8FF 10%,#6FA7FF 50%,#3C6CEC 110%);border-radius:30px;padding:2rem 2.5rem;margin-bottom:2.5rem;display:flex;flex-wrap:wrap;align-items:center;gap:2rem;box-shadow:0 22px 44px rgba(32,124,254,.4)}.stats-number{display:flex;align-items:baseline;gap:10px;color:#fff}.stats-number .big{font-weight:700;font-size:5rem;line-height:1}.stats-number .unit{font-weight:600;font-size:1.8rem}.stats-desc{font-weight:600;font-size:1.1rem;line-height:1.5;color:#fff;max-width:500px}.roles-grid{display:flex;flex-wrap:wrap;gap:2rem 3rem;margin-bottom:3rem}.role-item{display:flex;align-items:center;gap:12px}.role-icon{width:40px;height:40px;background:linear-gradient(145deg,#73A8FF,#3C6CEC);border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:1.2rem}.role-text{font-weight:600;font-size:1.2rem;color:#394355}.clients-section{background:linear-gradient(108deg,#E9EEF8,#FFF);border-radius:30px;padding:2rem;margin-bottom:2.5rem;box-shadow:0 24px 38px rgba(22,29,36,.08);backdrop-filter:blur(79px)}.clients-title{font-weight:600;font-size:1.5rem;color:#232C42;margin-bottom:1.5rem}.logos-row{display:flex;flex-wrap:wrap;align-items:center;gap:2.5rem 3rem;margin-bottom:1.2rem}.logo-placeholder{font-weight:700;font-size:1.4rem;background:rgba(255,255,255,.6);padding:.4rem 1.2rem;border-radius:30px;color:#1F2A44;border:1px solid #cdd9f0}.more-clients{font-weight:500;font-size:1.1rem;color:#394355;margin-top:10px}.company-stats{background:linear-gradient(108deg,#243057 -27.58%,#374255 107.93%);border-radius:30px;padding:2.5rem 2rem;box-shadow:0 24px 38px rgba(22,29,36,.08);backdrop-filter:blur(79px);color:#fff}.stats-header{font-weight:600;font-size:1.8rem;margin-bottom:2rem}.stats-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:2rem}.stat-item{display:flex;flex-direction:column;gap:6px}.stat-number{font-weight:700;font-size:2.5rem;line-height:1.2;background:linear-gradient(180deg,#73A8FF,#6B92F8);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}.stat-desc{font-weight:500;font-size:.9rem;line-height:1.4;color:rgba(255,255,255,.9)}@media (max-width:900px){.stats-grid{grid-template-columns:repeat(2,1fr)}.team-stats{flex-direction:column;align-items:flex-start}}@media (max-width:600px){.stats-grid{grid-template-columns:1fr}.logos-row{gap:1.5rem}.role-text{font-size:1rem}}.main-title{font-weight:600;font-size:2rem;line-height:1.2;color:#527DC5;margin-bottom:2rem}.offers-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:25px;margin-top:1.5rem}.offer-card{background:linear-gradient(145deg,#EDF4FF,#DDEAFF);border-radius:30px;padding:2rem 1.5rem;box-shadow:0 24px 38px rgba(22,29,36,.08);backdrop-filter:blur(79px);display:flex;flex-direction:column;gap:.8rem;transition:transform .2s}.offer-card:hover{transform:translateY(-6px)}.offer-title{font-weight:700;font-size:1.5rem;line-height:1.3;color:#232C42}.offer-desc{font-weight:500;font-size:1rem;color:#394355}.offer-valid{font-weight:400;font-size:.9rem;color:#4F5D80;margin-top:10px;border-top:1px dashed #a0b5d0;padding-top:12px}@media (max-width:900px){.offers-grid{grid-template-columns:repeat(2,1fr)}}@media (max-width:600px){.offers-grid{grid-template-columns:1fr}.cert-diploma{flex-direction:column;gap:2rem}.main-title{font-size:1.8rem}}.grass-icon{color:#527DC5;margin-right:6px}.document{max-width:1300px;width:100%;background:#FFF;border-radius:40px;box-shadow:0 30px 60px -20px rgba(0,20,50,.3);padding:2.5rem 2rem;overflow:hidden}.main-title{font-weight:600;font-size:2rem;line-height:1.2;color:#232C42;margin-bottom:.5rem}.subtitle{font-weight:400;font-size:1.2rem;color:#394355;margin-bottom:2.5rem}.cards-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:25px;margin-bottom:3.5rem}.project-card{border-radius:20px;overflow:hidden;box-shadow:0 24px 38px rgba(22,29,36,.08);transition:transform .2s}.project-card:hover{transform:translateY(-6px)}.card-header{background:linear-gradient(180deg,#73A8FF 0%,#6FA7FF 36.5%,#3C6CEC 100%);padding:14px 18px;display:flex;justify-content:space-between;align-items:center;color:#fff;font-size:.9rem;border:2px solid rgba(255,255,255,.15)}.card-header span{display:flex;gap:4px;align-items:baseline}.card-header .label{font-weight:400}.card-header .value{font-weight:600}.card-image{height:200px;background:linear-gradient(180deg,rgba(0,0,0,.5) 0%,rgba(0,0,0,.2) 100%),url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="%23a0b5d0"><rect width="100" height="100"/></svg>');background-size:cover;background-position:center;background-color:#c0d0e8;display:flex;align-items:flex-end;justify-content:flex-start;padding:15px}.contact-footer{background:linear-gradient(108deg,#243057 -27.58%,#374255 107.93%);border-radius:30px 30px 0 0;padding:2rem 2rem 1.5rem;color:#fff;margin:0 -2rem}.contact-title{font-weight:600;font-size:1.8rem;margin-bottom:2rem}.contact-row{display:flex;flex-wrap:wrap;gap:3rem;align-items:flex-start;justify-content:space-between}.contact-left{display:flex;flex-wrap:wrap;gap:3rem}.contact-block{display:flex;flex-direction:column;gap:1rem}.block-title{font-weight:600;font-size:1.2rem;margin-bottom:.5rem}.contact-item{display:flex;align-items:center;gap:12px}.icon-circle{width:38px;height:38px;background:linear-gradient(180deg,#73A8FF,#3C6CEC);border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:1rem}.contact-footer-text{font-weight:400;font-size:1rem;color:#fff;line-height:1.4}.contact-text strong{font-weight:600}.whatsapp-btn{display:flex;align-items:center;gap:10px;background:linear-gradient(180deg,#73A8FF,#3C6CEC);border-radius:60px;padding:.8rem 2rem;border:1px solid rgba(255,255,255,.3);box-shadow:0 24px 38px rgba(22,29,36,.08);backdrop-filter:blur(79px);font-weight:600;font-size:1.1rem;color:#fff;white-space:nowrap}.whatsapp-btn i{font-size:1.6rem}.bottom-bar{margin-top:2.5rem;padding-top:1.5rem;border-top:1px solid rgba(255,255,255,.1);display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;font-size:.75rem;color:rgba(255,255,255,.6);gap:15px}.bottom-links{display:flex;gap:20px}.bottom-links a{color:rgba(255,255,255,.6);text-decoration:none}.bottom-links a:hover{color:#fff}@media (max-width:900px){.cards-grid{grid-template-columns:repeat(2,1fr)}.contact-row{flex-direction:column;gap:2rem}}@media (max-width:600px){.cards-grid{grid-template-columns:1fr}.contact-left{flex-direction:column;gap:1.5rem}.bottom-bar{flex-direction:column;align-items:flex-start}}</style>
</head>
<body>
  <div class="card">
    <div class="header">
      <div class="logo-area">
        <span class="logo-icon"><i class="fas fa-tent"></i></span>
        <span class="logo-text">mobile‑tent.ru</span>
      </div>
      <div class="contacts">
        <div class="contact-item">
          <div class="contact-icon"><i class="fas fa-envelope"></i></div>
          <span class="contact-text">info@mobile-tent.ru</span>
        </div>
        <div class="contact-item">
          <div class="contact-icon"><i class="fas fa-phone-alt"></i></div>
          <span class="contact-text">+7 (495) 760-42-20</span>
        </div>
        <div class="contact-item">
          <div class="contact-icon"><i class="fas fa-phone-alt"></i></div>
          <span class="contact-text">+7 (985) 760-42-20</span>
        </div>
      </div>
    </div>
                <div class="contact-item">
                <span><strong>№{{offerNumber}} от {{date}}</strong></span>
                </div>
    <h1 class="main-title">КП для компании ООО «{{fullName}}»</h1>
    <div class="project-bar">
      <span>КП для компании {{fullName}} — проектирование и производство тентового шатра площадью {{area}} м²</span>
    </div>
    <div class="info-grid">
      <div class="info-card">
        <div class="card-title">
          <i class="fas fa-file-lines"></i> Описание
        </div>
        <div class="description-text">
          Площади небольшого ангара на {{area}} м² вполне достаточно, чтобы проводить различные мероприятия или презентации на открытом воздухе. Он стоит недорого, но мобильность и функционал конструкции решат массу задач. Открытый с 4‑х сторон и хорошо освещённый, он станет превосходной площадкой, защищённой от солнца и дождя.
        </div>
        <div style="margin-top: 20px; display: flex; gap: 15px; flex-wrap: wrap;">
          <span class="badge"><i class="far fa-building"></i> {{area}} м² площадь ангара</span>
          <span class="badge"><i class="fas fa-users"></i> 1200 чел. вместимость</span>
        </div>
      </div>
      <div class="info-card">
        <div class="card-title">
          <i class="fas fa-gear"></i> Характеристики
        </div>
        <div class="chars-grid">
          <span class="chars-label">Тип ангара</span>
          <span class="chars-value">{{steelType}}</span>

          <span class="chars-label">Площадь шатра</span>
          <span class="chars-value">{{area}} м²</span>

          <span class="chars-label">Вместимость</span>
          <span class="chars-value">1200 чел.</span>
          
          <span class="chars-label">Оболочка</span>
          <span class="chars-value">Архитектурная негорючая ПВХ ткань 650 гр/м²</span>

          <span class="chars-label">Цвет</span>
          <span class="chars-value">Белый / Бежевый / Серый</span>

          <span class="chars-label">Панорамное окно</span>
          <span class="chars-value">«Мягкое ПВХ окно» до –30°C, 700 мкр</span>

          <span class="chars-label">Утеплитель</span>
          <span class="chars-value">Холлофайбер 500 гр/м² (5 см) + пароизоляция</span>

          <span class="chars-label">Декоративная ткань</span>
          <span class="chars-value">Термостекляна / Оксфорд</span>

          <span class="chars-label">Дверь</span>
          <span class="chars-value">Односторонняя</span>

          <span class="chars-label">Материал каркаса</span>
          <span class="chars-value">Стальная труба 25×2 мм</span>

          <span class="chars-label">Покрытие каркаса</span>
          <span class="chars-value">Полиэфирная порошковая белая краска</span>
        </div>
      </div>
    </div>
    <div style="position: absolute; bottom: 0; right: 0; width: 400px; height: 300px; background: radial-gradient(circle at 70% 100%, rgba(255,255,255,0.4) 0%, transparent 60%); pointer-events: none; z-index: 1;"></div>

    <div class="document">
  <div class="timeline-bar">
    <div class="timeline-left">
      <span class="timeline-label">Сроки изготовления:</span>
      <span class="timeline-days">35 дней</span>
      <div class="timeline-note">
        <span class="icon-box"><i class="fas fa-play" style="font-size: 10px;"></i></span>
        <span>Начнем работу в течение 2 дней после подписания документов</span>
      </div>
    </div>
    <div></div>
  </div>

  <div class="offer-header">
    <h2>Предлагаем 3 варианта</h2>
    <div class="price-validity">
      <i class="fas fa-asterisk" style="font-size: 0.6rem;"></i>
      Цена действительна в течение 3 дней с момента отправки коммерческого предложения и не меняется в случае начала работ
    </div>
  </div>

  <div class="cards-stack">
    <div class="variant-card">
      <div class="sphere-badge">Базовая комплектация</div>
      <div class="card-image">
        <div class="image-placeholder">
        <img src="https://mobile-tent.ru/angar25x30,1.webp" alt="angar" style="max-width: 100%;">
        </div>
      </div>
      <div class="card-content">
        <div class="desc-col">
          <div class="desc-title">Описание</div>
          <div class="specs-grid">
            <div class="spec-row"><span class="spec-label">Порошковое покрытие:</span><span class="spec-value">{{hangarPricePowder}}</span></div>
            <div class="spec-row"><span class="spec-label">Цинкование:</span><span class="spec-value">{{hangarPriceZinc}}</span></div>
            <div class="spec-row"><span class="spec-label">Срок изготовления:</span><span class="spec-value">35 дней</span></div>
          </div>
        </div>
        <div class="qty-col">
          <div class="qty-head">Кол-во</div>
          <div class="qty-number">1 шт</div>
        </div>
      </div>
    </div>

    <div class="variant-card">
      <div class="sphere-badge">Двойной тент</div>
      <div class="card-image">
        <div class="image-placeholder">
        <img src="https://mobile-tent.ru/angar25x30,1.webp" alt="angar" style="max-width: 100%;">
        </div>
      </div>
      <div class="card-content">
        <div class="desc-col">
          <div class="desc-title">Описание</div>
          <div class="specs-grid">
            <div class="spec-row"><span class="spec-label">Порошковое покрытие:</span><span class="spec-value">{{doubleTentPricePowder}}</span></div>
            <div class="spec-row"><span class="spec-label">Цинкование:</span><span class="spec-value">{{doubleTentPriceZinc}}</span></div>
            <div class="spec-row"><span class="spec-label">Срок изготовления:</span><span class="spec-value">35 дней</span></div>
          </div>
        </div>
        <div class="qty-col">
          <div class="qty-head">Кол-во</div>
          <div class="qty-number">1 шт</div>
        </div>
      </div>
    </div>

    <div class="variant-card">
      <div class="sphere-badge">Утеплённый</div>
      <div class="card-image">
        <div class="image-placeholder">
        <img src="https://mobile-tent.ru/angar25x30,1.webp" alt="angar" style="max-width: 100%;">
        </div>
      </div>
      <div class="card-content">
        <div class="desc-col">
          <div class="desc-title">Описание</div>
          <div class="specs-grid">
            <div class="spec-row"><span class="spec-label">Порошковое покрытие:</span><span class="spec-value">{{insulatedPricePowder}}</span></div>
            <div class="spec-row"><span class="spec-label">Цинкование:</span><span class="spec-value">{{insulatedPriceZinc}}</span></div>
            <div class="spec-row"><span class="spec-label">Срок изготовления:</span><span class="spec-value">40 дней</span></div>
          </div>
        </div>
        <div class="qty-col">
          <div class="qty-head">Кол-во</div>
          <div class="qty-number">1 шт</div>
        </div>
      </div>
    </div>
  </div>

  <div class="cost-breakdown">
    <h3 class="cost-title">Детализация стоимости</h3>
    <div class="cost-table">
      <div class="cost-row">
        <div class="cost-item">
          <span class="cost-name">Тент</span>
          <span class="cost-price">{{tentPrice}}</span>
        </div>
        <span class="cost-unit">{{totalArea}} м²</span>
      </div>

      <div class="cost-row">
        <div class="cost-item">
          <span class="cost-name">Каркас (цинк)</span>
          <span class="cost-price">{{framePriceZinc}} ₽</span>
        </div>
        <span class="cost-unit">{{totalWeight}} кг</span>
      </div>

      <div class="cost-row">
        <div class="cost-item">
          <span class="cost-name">Каркас (порошок)</span>
          <span class="cost-price">{{framePricePowder}} ₽</span>
        </div>
        <span class="cost-unit">{{totalWeight}} кг</span>
      </div>
    </div>
  </div>

  <div style="margin-top: 40px; border-top: 2px solid #eef2f8; padding-top: 20px; display: flex; justify-content: space-between; font-size: 0.85rem; color: #6a7b9c;">
  </div>
</div>
<div class="document" style="margin-top: 40px;">
  <h2 class="main-title">Почему наши шатры</h2>
  <div class="cards-grid">
    <div class="benefit-card">
      <div class="card-icon"><i class="fas fa-clock"></i></div>
      <div class="card-text">
        <div class="card-title">Минимум 15 лет</div>
        <div class="card-desc">будут иметь презентабельный вид без ржавчины и выцветания тента</div>
      </div>
    </div>

    <div class="benefit-card">
      <div class="card-icon"><i class="fas fa-coins"></i></div>
      <div class="card-text">
        <div class="card-title">Ваша компания не терпит убытки и упущенную прибыль</div>
        <div class="card-desc">для сохранения идеального внешнего вида. Не въедается грязь и пыль</div>
      </div>
    </div>

    <div class="benefit-card">
      <div class="card-icon"><i class="fas fa-wind"></i></div>
      <div class="card-text">
        <div class="card-title">Конструкции выдерживают самые суровые условия эксплуатации</div>
        <div class="card-desc">Ветер до 35м/с, снег от 60 до 380 кг/м²</div>
      </div>
    </div>

    <div class="benefit-card">
      <div class="card-icon"><i class="fas fa-water"></i></div>
      <div class="card-text">
        <div class="card-title">Тент не сгниет и не будет попадать вода через швы</div>
        <div class="card-desc">благодаря запатентованному покрытию Low wick</div>
      </div>
    </div>
  </div>

  <div class="warranty-block">
    <div class="warranty-title">ГАРАНТИЯ</div>
    <div class="warranty-items">
      <div class="warranty-item">
        <span class="warranty-years">5 лет</span>
        <span class="warranty-label">на конструкцию</span>
      </div>
      <div class="warranty-item">
        <span class="warranty-years">10 лет</span>
        <span class="warranty-label">на ткань</span>
      </div>
      <div class="warranty-item">
        <span class="warranty-years">50 лет</span>
        <span class="warranty-label">а сварные швы</span>
      </div>
      <div class="warranty-item">
        <span class="warranty-years">25 лет</span>
        <span class="warranty-label">на отсутствие коррозии</span>
      </div>
    </div>
  </div>
  <div class="small-note">
  </div>
</div>
<div class="document" style="margin-top: 40px;">
  <h2 class="main-title">Напоминаем про этапы работы</h2>

  <div class="stages-container">
    <div class="stages-column">
      <div class="stage-card">
        <div class="stage-left">
          <span class="stage-number">01</span>
          <div class="stage-icon"><i class="fas fa-comment-dots"></i></div>
        </div>
        <div class="stage-desc">
          <div class="stage-title">Сообщаете пожелания и задачи</div>
          <div class="stage-sub">mobile-tent.ru</div>
        </div>
      </div>

      <div class="stage-card">
        <div class="stage-left">
          <span class="stage-number">02</span>
          <div class="stage-icon"><i class="fas fa-cubes"></i></div>
        </div>
        <div class="stage-desc">
          <div class="stage-title">Создание 3Д модели</div>
          <div class="stage-sub">mobile-tent.ru</div>
        </div>
      </div>

      <div class="stage-card">
        <div class="stage-left">
          <span class="stage-number">03</span>
          <div class="stage-icon"><i class="fas fa-draw-polygon"></i></div>
        </div>
        <div class="stage-desc">
          <div class="stage-title">Проектирование</div>
          <div class="stage-sub">mobile-tent.ru</div>
        </div>
      </div>
    </div>

    <div class="divider-bar">
      <span class="ball-text">mobile-tent.ru</span>
      <span class="ball-text">mobile-tent.ru</span>
      <span class="ball-text">mobile-tent.ru</span>
      <span class="ball-text">mobile-tent.ru</span>
    </div>

    <div class="stages-column">
      <div class="stage-card">
        <div class="stage-left">
          <span class="stage-number">04</span>
          <div class="stage-icon"><i class="fas fa-industry"></i></div>
        </div>
        <div class="stage-desc">
          <div class="stage-title">Производство и цинкование</div>
          <div class="stage-sub">mobile-tent.ru</div>
        </div>
      </div>

      <div class="stage-card">
        <div class="stage-left">
          <span class="stage-number">05</span>
          <div class="stage-icon"><i class="fas fa-clipboard-check"></i></div>
        </div>
        <div class="stage-desc">
          <div class="stage-title">Контроль качества ОТК</div>
          <div class="stage-sub">mobile-tent.ru</div>
        </div>
      </div>

      <div class="stage-card">
        <div class="stage-left">
          <span class="stage-number">06</span>
          <div class="stage-icon"><i class="fas fa-truck"></i></div>
        </div>
        <div class="stage-desc">
          <div class="stage-title">Упаковка, доставка, монтаж на объекте</div>
          <div class="stage-sub">mobile-tent.ru</div>
        </div>
      </div>
    </div>
  </div>

  <div style="margin-top: 40px; text-align: right; font-size: 0.8rem; color: #6A7B9C;">
  </div>
</div>
<div class="document" style="margin-top: 40px;">
  <h2 class="section-title">Над вашим шатром будут работать</h2>

  <div class="team-stats">
    <div class="stats-number">
      <span class="big">80</span>
      <span class="unit">человек</span>
    </div>
    <div class="stats-desc">
      с высшим строительным и инженерным образованием и опытом от 10 лет
    </div>
  </div>

  <div class="roles-grid">
    <div class="role-item">
      <div class="role-icon"><i class="fas fa-pencil-ruler"></i></div>
      <span class="role-text">Дизайнеры</span>
    </div>
    <div class="role-item">
      <div class="role-icon"><i class="fas fa-cogs"></i></div>
      <span class="role-text">Технологи, конструктора</span>
    </div>
    <div class="role-item">
      <div class="role-icon"><i class="fas fa-draw-polygon"></i></div>
      <span class="role-text">Геодезисты</span>
    </div>
    <div class="role-item">
      <div class="role-icon"><i class="fas fa-archway"></i></div>
      <span class="role-text">Проектировщики</span>
    </div>
  </div>

  <div class="clients-section">
    <div class="clients-title">
      Наши клиенты — крупные частные и государственные компании по всей России
    </div>
    <div class="logos-row">
      <span class="logo-placeholder">СБЕР БАНК</span>
      <span class="logo-placeholder">ВТБ</span>
      <span class="logo-placeholder">СБЕР БАНК</span>
    </div>
    <div class="more-clients">
      <i class="fas fa-plus-circle" style="color: #3C6CEC; margin-right: 8px;"></i> и еще 100+ известных компаний
    </div>
  </div>

  <div class="company-stats">
    <div class="stats-header">Цифры компании</div>
    <div class="stats-grid">
      <div class="stat-item">
        <span class="stat-number">15+ лет</span>
        <span class="stat-desc">производим и проектируем тентовые конструкции</span>
      </div>
      <div class="stat-item">
        <span class="stat-number">5000+</span>
        <span class="stat-desc">конструкций сделано</span>
      </div>
      <div class="stat-item">
        <span class="stat-number">3000+ м²</span>
        <span class="stat-desc">цехов производства</span>
      </div>
      <div class="stat-item">
        <span class="stat-number">35 штук</span>
        <span class="stat-desc">уникальных станков</span>
      </div>
    </div>
  </div>
</div>


<div class="document" style="margin-top: 40px;">
  <div class="promo-heading">Акция только 3 дня!</div>

  <div class="offers-grid">
    <div class="offer-card">
      <div class="offer-title">МЕСЯЦ СКИДОК</div>
      <div class="offer-desc">На все тентовые конструкции</div>
      <div class="offer-valid">Действительно до</div>
    </div>
    <div class="offer-card">
      <div class="offer-title">НА АРОЧНЫЕ ШАТРЫ</div>
      <div class="offer-desc">На все тентовые конструкции</div>
      <div class="offer-valid">Действительно до</div>
    </div>
    <div class="offer-card">
      <div class="offer-title">МЕСЯЦ СКИДОК</div>
      <div class="offer-desc">На все тентовые конструкции</div>
      <div class="offer-valid">Действительно до</div>
    </div>
  </div>
  <div style="margin-top: 40px; text-align: right; font-size: 0.8rem; color: #6A7B9C;">
  </div>
</div>
<div class="document" style="margin-top: 40px;">
  <h2 class="main-title">Примеры работы</h2>
  <div class="subtitle">Более 60% становятся постоянными клиентами</div>

  <div class="cards-grid">
    <div class="project-card">
      <div class="card-header">
        <span><span class="label">Срок:</span> <span class="value">1 месяц</span></span>
        <span><span class="label">Площадь:</span> <span class="value">250 м²</span></span>
      </div>
<div class="card-image" style="background-image: url('images/angar25x30,1.webp'); background-size: cover; background-position: center;">        <!-- можно оставить пустым или добавить иконку -->
      </div>
    </div>

    <div class="project-card">
      <div class="card-header">
        <span><span class="label">Срок:</span> <span class="value">1 месяц</span></span>
        <span><span class="label">Площадь:</span> <span class="value">250 м²</span></span>
      </div>
<div class="card-image" style="background-image: url('images/angar25x30,1.webp'); background-size: cover; background-position: center;">        <!-- можно оставить пустым или добавить иконку -->
      </div>
    </div>

    <div class="project-card">
      <div class="card-header">
        <span><span class="label">Срок:</span> <span class="value">1 месяц</span></span>
        <span><span class="label">Площадь:</span> <span class="value">250 м²</span></span>
      </div>
<div class="card-image" style="background-image: url('images/angar25x30,1.webp'); background-size: cover; background-position: center;">        <!-- можно оставить пустым или добавить иконку -->
      </div>
    </div>
  </div>
</div>

<!-- ========== НОВЫЕ ДОБАВЛЕННЫЕ СЕКЦИИ (без изменения CSS) ========== -->

<!-- 1. Технические характеристики (расширенная версия) -->
<div class="document" style="margin-top: 40px;">
  <h2 class="main-title">Технические характеристики</h2>
  <div class="info-grid">
    <div class="info-card">
      <div class="card-title"><i class="fas fa-cubes"></i> Конструкция и каркас</div>
      <div class="chars-grid">
        <span class="chars-label">Тип конструкции</span>
        <span class="chars-value">Несущий, сборно-разборный на болтовых соединениях</span>
        <span class="chars-label">Назначение</span>
        <span class="chars-value">Крепление и натяжение тентовых покрытий (мембран), передача нагрузок на основание</span>
        <span class="chars-label">Металлокаркас</span>
        <span class="chars-value">Решетчатые конструкции пространственного типа из замкнутых стальных профилей</span>
        <span class="chars-label">Крепление к основанию</span>
        <span class="chars-value">Анкерное</span>
      </div>
    </div>
    <div class="info-card">
      <div class="card-title"><i class="fas fa-shield-alt"></i> Антикоррозийная защита</div>
      <div class="chars-grid">
        <span class="chars-label">Покрытие</span>
        <span class="chars-value">Порошково-полимерное цинк-наполненное, толщина 150 мкм</span>
        <span class="chars-label">Свойства</span>
        <span class="chars-value">Протекторная + катодная защита, предотвращает подпленочную коррозию</span>
        <span class="chars-label">Срок службы</span>
        <span class="chars-value">Увеличение в 5-7 раз в тяжелых климатических условиях</span>
      </div>
    </div>
  </div>

  <div class="info-grid" style="margin-top: 0;">
    <div class="info-card">
      <div class="card-title"><i class="fas fa-umbrella"></i> Тентовое ограждающее покрытие</div>
      <div class="chars-grid">
        <span class="chars-label">Материал</span>
        <span class="chars-value">Hanwha (Ю. Корея): полиэстер + ПВХ + акриловый лак AFC</span>
        <span class="chars-label">Свойства</span>
        <span class="chars-value">Морозостойкое, светопропускающее, устойчиво к УФ</span>
        <span class="chars-label">Горючесть</span>
        <span class="chars-value">Г1 (слабогорючие) по ГОСТ 30244-94</span>
        <span class="chars-label">Воспламеняемость</span>
        <span class="chars-value">В2 (умеренновоспламеняемые) по ГОСТ 30402-96</span>
        <span class="chars-label">Распространение пламени</span>
        <span class="chars-value">РП1 (нераспространяющие) по ГОСТ 30444-97</span>
        <span class="chars-label">Прочность на разрыв</span>
        <span class="chars-value">4000 daN/5см (8 тонн по основе и утку)</span>
        <span class="chars-label">Монтаж мембраны</span>
        <span class="chars-value">Надежное крепление, стабильное натяжение без провисания</span>
        <span class="chars-label">Гарантийный срок</span>
        <span class="chars-value">15 лет</span>
      </div>
    </div>
    <div class="info-card">
      <div class="card-title"><i class="fas fa-temperature-low"></i> Теплоизоляция & Пожарная безопасность</div>
      <div class="chars-grid">
        <span class="chars-label">Утеплитель</span>
        <span class="chars-value">Холофайберстрой от 50 мм (силиконизированные волокна)</span>
        <span class="chars-label">Особенности</span>
        <span class="chars-value">Не сбивается, не слеживается, сохраняет форму даже после намокания</span>
        <span class="chars-label">Сопротивление теплопередаче</span>
        <span class="chars-value">Ro = 2,42 м²·°С/Вт</span>
        <span class="chars-label">Класс горючести утеплителя</span>
        <span class="chars-value">R 15 (сертификат № ПСБК RU.ПБ01.Н0144)</span>
        <span class="chars-label">Гарантия производителя</span>
        <span class="chars-value">12 месяцев на монтаж</span>
      </div>
    </div>
  </div>
</div>

<!-- 2. Доставка -->
<div class="document" style="margin-top: 40px;">
  <h2 class="main-title">Доставка</h2>
  <div class="info-grid">
    <div class="info-card">
      <div class="card-title"><i class="fas fa-truck"></i> Условия отгрузки</div>
      <div class="description-text" style="margin-bottom: 8px;">
        Согласовывается на момент отгрузки либо самовывоз из г. Калуга.
      </div>
      <div class="chars-grid">
        <span class="chars-label">Вместимость одной фуры</span>
        <span class="chars-value">около 13 тонн</span>
        <span class="chars-label">Для отгрузки ангара потребуется</span>
        <span class="chars-value">3 фуры</span>
      </div>
    </div>
    <div class="info-card">
      <div class="card-title"><i class="fas fa-boxes"></i> Логистика</div>
      <div class="description-text">
        Отгрузка осуществляется после полной готовности конструкции. Возможна отправка в любой регион РФ.
      </div>
    </div>
  </div>
</div>

<!-- 3. Условия предложения -->
<div class="document" style="margin-top: 40px;">
  <h2 class="main-title">Условия коммерческого предложения</h2>
  <div class="info-grid">
    <div class="info-card">
      <div class="card-title"><i class="fas fa-calendar-alt"></i> Срок действия</div>
      <div class="chars-grid">
        <span class="chars-label">Действительно</span>
        <span class="chars-value">14 календарных дней</span>
      </div>
    </div>
    <div class="info-card">
      <div class="card-title"><i class="fas fa-credit-card"></i> Условия оплаты</div>
      <div class="chars-grid">
        <span class="chars-label">Предоплата</span>
        <span class="chars-value">70%</span>
        <span class="chars-label">Остаток</span>
        <span class="chars-value">30% по письму-уведомлению о готовности ангара к отгрузке со склада</span>
      </div>
    </div>
  </div>
  <div class="info-grid" style="margin-top: 0;">
    <div class="info-card">
      <div class="card-title"><i class="fas fa-clock"></i> Срок производства</div>
      <div class="chars-grid">
        <span class="chars-label">Изготовление</span>
        <span class="chars-value">От 31 рабочего дня</span>
      </div>
    </div>
    <div class="info-card">
      <div class="card-title"><i class="fas fa-ruble-sign"></i> Цены указаны</div>
      <div class="chars-grid">
        <span class="chars-label">НДС</span>
        <span class="chars-value">Без НДС</span>
      </div>
    </div>
  </div>
</div>

<!-- 4. Типы конструкций (ТипД25, ТипД30, ТипС) с картинками -->
<div class="document" style="margin-top: 40px;">
  <h2 class="main-title">Типы конструкций</h2>
  <div class="cards-stack" style="display: flex; flex-wrap: wrap; gap: 24px; justify-content: space-between;">
    <div class="variant-card" style="flex: 1; min-width: 250px;">
      <div class="sphere-badge">ТипД25</div>
      <div class="card-image">
        <div class="image-placeholder">
          <img src="https://mobile-tent.ru/image" alt="ТипД25" style="max-width: 100%;">
        </div>
      </div>
      <div class="card-content">
        <div class="desc-col">
          <div class="desc-title">Арочный шатер</div>
          <div class="specs-grid">
            <div class="spec-row"><span class="spec-label">Пролет:</span><span class="spec-value">25 м</span></div>
            <div class="spec-row"><span class="spec-label">Нагрузка:</span><span class="spec-value">до 380 кг/м² снега</span></div>
          </div>
        </div>
      </div>
    </div>
    <div class="variant-card" style="flex: 1; min-width: 250px;">
      <div class="sphere-badge">ТипД30</div>
      <div class="card-image">
        <div class="image-placeholder">
          <img src="https://mobile-tent.ru/image" alt="ТипД30" style="max-width: 100%;">
        </div>
      </div>
      <div class="card-content">
        <div class="desc-col">
          <div class="desc-title">Усиленный каркас</div>
          <div class="specs-grid">
            <div class="spec-row"><span class="spec-label">Пролет:</span><span class="spec-value">30 м</span></div>
            <div class="spec-row"><span class="spec-label">Ветровая нагрузка:</span><span class="spec-value">до 35 м/с</span></div>
          </div>
        </div>
      </div>
    </div>
    <div class="variant-card" style="flex: 1; min-width: 250px;">
      <div class="sphere-badge">ТипС</div>
      <div class="card-image">
        <div class="image-placeholder">
          <img src="https://mobile-tent.ru/image" alt="ТипС" style="max-width: 100%;">
        </div>
      </div>
      <div class="card-content">
        <div class="desc-col">
          <div class="desc-title">Сферический/шатровый</div>
          <div class="specs-grid">
            <div class="spec-row"><span class="spec-label">Особенность:</span><span class="spec-value">Панорамное остекление</span></div>
            <div class="spec-row"><span class="spec-label">Применение:</span><span class="spec-value">Выставочные залы</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  <div class="contact-footer">
    <div class="contact-title">Свяжитесь с нами и начнем работу</div>
    <div class="contact-row">
      <div class="contact-left">
        <div class="contact-block">
          <div class="block-title">Звоните</div>
          <div class="contact-item">
            <div class="icon-circle"><i class="fas fa-phone-alt"></i></div>
            <div class="contact-footer-text">+7 (495) 760-42-20</div>
          </div>
          <div class="contact-item">
            <div class="icon-circle"><i class="fas fa-phone-alt"></i></div>
            <div class="contact-footer-text">+7 (985) 760-42-20</div>
          </div>
        </div>
        <div class="contact-block">
          <div class="block-title">Пишите</div>
          <div class="contact-item">
            <div class="icon-circle"><i class="fas fa-envelope"></i></div>
            <div class="contact-footer-text">info@mobile-tent.ru</div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-bar">
      <div>mobile-tent.ru</div>
      <div>Адрес офиса: Московская область, г. Красногорск, ул. Молодежная, д. 4</div>
      <div>ООО mobile-tent.ru</div>
      <div class="bottom-links">
        <a href="">Политика конфиденциальности</a>
        <a href="">Пользовательское соглашение</a>
      </div>
    </div>
  </div>
</div>
</body>
</html>`;


export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { fullName, email, phone, results, dimensions, options, context } = data;

    // Validation
    if (!fullName || !phone || !email) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // --- 1. Send lead to CRM (same as before, without telegram/chatId) ---
    const crmPayload = new URLSearchParams();

    crmPayload.append('domain', context?.domainHost || '');
    crmPayload.append('phone', phone || '');
    crmPayload.append('name', fullName || '');
    crmPayload.append('email', email || '');

    crmPayload.append('Время клиента', context ? `${context.clientTime} (${context.tz})` : '');
    crmPayload.append('Дата создания', context?.clientDate || '');
    crmPayload.append('Источник', context ? `Сайт ${context.domainHost} — форма «Получить КП»` : '');

    if (context) {
      crmPayload.append('UF_CRM_1698687546', context.domainHost || '');
      crmPayload.append('UF_CRM_CUST_LTIME', `${context.clientTime} (${context.tz})`);
      crmPayload.append('SOURCE_DESCRIPTION', `Клиент запросил КП (калькулятор ангара). Страница: ${context.pageUrl} | Время клиента: ${context.clientTime} (${context.tz}) | Дата: ${context.clientDate} | Источник: сайт ${context.domainHost} (форма «Получить КП»).`);
      crmPayload.append('UF_CRM_1712907937027', context.pageUrl || '');
      crmPayload.append('doc.pagetitle', context.pageTitle || '');
    }

    crmPayload.append('UF_CRM_1728380948090', context?.utm_source || '');
    crmPayload.append('UF_CRM_1728380965926', context?.utm_medium || '');
    crmPayload.append('UF_CRM_1728380991359', context?.utm_campaign || '');
    crmPayload.append('UF_CRM_1728381006839', context?.utm_content || '');
    crmPayload.append('UF_CRM_1728381021062', context?.utm_term || '');

    crmPayload.append('_ga', context?.gaCookie || '');
    crmPayload.append('_ym_uid', context?.ymUid || '');
    crmPayload.append('gclid', context?.gclid || '');
    crmPayload.append('yclid', context?.yclid || '');
    crmPayload.append('roistat_visit', context?.roistat_visit || '');

    const messageReadable = context ? (
      `Форма: «Получить КП (калькулятор ангара)»\n` +
      `Страница: ${context.pageUrl}\nЗаголовок: ${context.pageTitle}\nИсточник-реферер: ${context.referrer || '—'}\n` +
      `Время клиента: ${context.clientTime} (${context.tz}), Дата: ${context.clientDate}\n\n` +
      `UTM: source=${context.utm_source || '—'}, medium=${context.utm_medium || '—'}, campaign=${context.utm_campaign || '—'}, content=${context.utm_content || '—'}, term=${context.utm_term || '—'}\n` +
      `gclid=${context.gclid || '—'}, yclid=${context.yclid || '—'}, roistat_visit=${context.roistat_visit || '—'}\n` +
      `_ga=${context.gaCookie || '—'} (cid=${context.gaClientId || '—'}), _ym_uid=${context.ymUid || '—'}\n\n` +
      `Устройство: ${context.platform || '—'}, Язык: ${context.lang || '—'}, DPR=${context.dpr || '—'}, viewport=${context.vw || '—'}×${context.vh || '—'}\n` +
      `User-Agent: ${context.ua || '—'}\n\n` +
      `Расчет: ${dimensions?.width}м x ${dimensions?.length}м x ${dimensions?.height}м, тип: ${options?.hangarType === 'A' ? 'Арочный' : 'Двускатный'}, сталь: ${options?.steelType}, снеговой район: ${options?.snowRegion}\n` +
      `Площадь: ${results?.area} м², масса каркаса: ${results?.totalWeight ? Math.round(results.totalWeight) : ''} кг, стоимость (порошок): ${results?.hangarPricePowder} ₽, (цинк): ${results?.hangarPriceZinc} ₽`
    ) : '';

    crmPayload.append('message', messageReadable);

    // Fire CRM request (fire and forget)
    fetch('https://crm.grand-tent.ru/local/webhooks/get_from_sites.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
      body: crmPayload.toString(),
    }).catch(err => console.error('CRM webhook error:', err));

    // --- 2. Generate HTML file (exact logic from n8n) ---
    const today = new Date();
    const dateStr = today.toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit', year: 'numeric' });
    const offerNumber = 'КП-' + today.getTime().toString().slice(-6);
    const archSpacing = 2.5;
    const archCount = Math.ceil((dimensions?.length || 40) / archSpacing);

    const replacements: Record<string, string> = {
      '{{fullName}}': fullName || 'Клиент',
      '{{date}}': dateStr,
      '{{offerNumber}}': offerNumber,
      '{{width}}': dimensions?.width?.toString() || '15',
      '{{length}}': dimensions?.length?.toString() || '40',
      '{{height}}': dimensions?.height?.toString() || '3',
      '{{area}}': results?.area?.toString() || '600',
      '{{ridgeHeight}}': results?.ridgeHeight ? results.ridgeHeight.toFixed(1) : '6.6',
      '{{totalWeight}}': results?.totalWeight ? Math.round(results.totalWeight).toString() : '15000',
      '{{totalArea}}': results?.totalArea ? results.totalArea.toFixed(0) : '1376',
      '{{tentPrice}}': formatCurrency(results?.tentPrice || 2145847),
      '{{framePricePowder}}': formatCurrency(results?.framePricePowder || 2115000),
      '{{framePriceZinc}}': formatCurrency(results?.framePriceZinc || 3210000),
      '{{hangarPricePowder}}': formatCurrency(results?.hangarPricePowder || 4260847),
      '{{doubleTentPricePowder}}': formatCurrency(results?.doubleTentPricePowder || 6391270),
      '{{insulatedPricePowder}}': formatCurrency(results?.insulatedPricePowder || 7243440),
      '{{hangarPriceZinc}}': formatCurrency(results?.hangarPriceZinc || 5355847),
      '{{doubleTentPriceZinc}}': formatCurrency(results?.doubleTentPriceZinc || 8033770),
      '{{insulatedPriceZinc}}': formatCurrency(results?.insulatedPriceZinc || 9104940),
      '{{steelType}}': options?.steelType || 'СТ3',
      '{{hangarType}}': options?.hangarType === 'A' ? 'Арочный' : options?.hangarType === 'D' ? 'Двускатный' : 'Арочный',
      '{{snowRegion}}': options?.snowRegion?.toString() || '3',
      '{{archCount}}': archCount.toString(),
      '{{archSpacing}}': archSpacing.toFixed(1),
    };

    let filledHtml = htmlTemplate;
    for (const [placeholder, value] of Object.entries(replacements)) {
      filledHtml = filledHtml.replace(new RegExp(placeholder.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), value);
    }

    const filename = `Kommercheskoe_predlozhenie_${fullName.replace(/\s+/g, '_')}.html`;

// Return the HTML file as a download with proper UTF-8 encoding
return new NextResponse(Buffer.from(filledHtml, 'utf-8'), {
  status: 200,
  headers: {
    'Content-Type': 'text/html; charset=utf-8',
    'Content-Disposition': `attachment; filename="${filename}"`,
  },
});

  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}