// =====================================================
// 🌐 ระบบเปลี่ยนภาษา TH / EN (ใช้ร่วมกันทุกหน้า)
//   - แก้คำแปลได้ใน I18N ด้านล่าง
//   - ข้อมูลในหน้า (ผลงาน, ไฟล์, เกียรติบัตร ฯลฯ) ใส่ภาษาอังกฤษได้ด้วยฟิลด์ที่ลงท้าย _en
//     เช่น title_en, desc_en, category_en (ถ้าไม่ใส่ จะใช้ภาษาไทยแทน)
// =====================================================
(function () {
  const I18N = {
    th: {
      // เมนู
      "nav.portfolio": "ผลงาน",
      "nav.certs": "เกียรติบัตร",
      "nav.downloads": "ดาวน์โหลด",
      "nav.contact": "ติดต่อ",
      "all": "ทั้งหมด",
      "loading": "กำลังโหลด…",
      "lang.switch": "Switch to English",

      // หน้าติดต่อ
      "contact.title": "ติดต่อ",
      "contact.bio": "สวัสดีครับ 👋 นักพัฒนาที่ชอบสร้างสิ่งใหม่ ๆ ติดต่อพูดคุยได้ทุกช่องทางด้านล่างเลยครับ",
      "contact.portfolio": "ดูผลงาน",
      "contact.certs": "เกียรติบัตรและกิจกรรม",
      "contact.downloads": "ดาวน์โหลด",
      "soon": "เร็ว ๆ นี้",

      // หน้าผลงาน
      "pf.title": "ผลงาน",
      "pf.h1": "ผลงานที่ผมสร้าง",
      "pf.sub": "รวมโปรเจกต์ที่ทำมา ทั้งเว็บ แอป และงานทดลองเล็ก ๆ น้อย ๆ",
      "pf.demo": "ดูผลงาน",
      "pf.code": "โค้ด",
      "pf.repos": "Repositories ล่าสุด",
      "pf.seeAll": "ดูทั้งหมดบน GitHub →",
      "pf.noRepos": "ยังไม่มี repository สาธารณะ",
      "pf.noDesc": "ไม่มีคำอธิบาย",
      "pf.repoErr": "โหลด repository ไม่ได้ ลองรีเฟรชอีกครั้ง",
      "pf.ctaH": "อยากร่วมงานกัน?",
      "pf.ctaP": "ทักมาพูดคุยได้เลยครับ",
      "pf.ctaBtn": "ช่องทางติดต่อ →",

      // หน้าดาวน์โหลด
      "dl.title": "ดาวน์โหลด",
      "dl.sub": "รวมไฟล์ เอกสาร และโปรแกรมต่าง ๆ กดดาวน์โหลดได้เลย",
      "dl.search": "ค้นหาไฟล์…",
      "dl.empty": "ไม่พบไฟล์ที่ค้นหา",
      "dl.view": "ดู",
      "dl.download": "ดาวน์โหลด",
      "dl.openFolder": "เปิดโฟลเดอร์",
      "dl.tip": "💡 ไฟล์ทั้งหมดเก็บอยู่บน Google Drive ถ้าไฟล์ใหญ่ Google จะถามยืนยันก่อนดาวน์โหลด ให้กด \"ดาวน์โหลดต่อ\" ได้เลย",

      // หน้าเกียรติบัตร
      "ac.title": "เกียรติบัตรและกิจกรรม",
      "ac.h1": "เกียรติบัตรและกิจกรรม",
      "ac.sub": "รวมใบรับรอง รางวัล และกิจกรรมที่เคยเข้าร่วม",
      "ac.statCert": "เกียรติบัตร",
      "ac.statAward": "รางวัล",
      "ac.statAct": "กิจกรรม",
      "ac.certs": "🏅 เกียรติบัตร",
      "ac.acts": "📅 กิจกรรม",
      "ac.noCerts": "ยังไม่มีเกียรติบัตร",
      "ac.noActs": "ยังไม่มีกิจกรรม",
      "ac.verify": "ตรวจสอบใบรับรอง ↗",
      "ac.photos": "{n} รูป · กดเพื่อดูเต็มจอ",
      "ac.openFolder": "📁 เปิดโฟลเดอร์รูปทั้งหมด ↗",
      "ac.details": "ดูรายละเอียด ↗",
      "ac.close": "ปิด",
      "ac.prev": "รูปก่อนหน้า",
      "ac.next": "รูปถัดไป",
      "ac.viewPhoto": "ดูรูปที่ {n}"
    },
    en: {
      "nav.portfolio": "Portfolio",
      "nav.certs": "Certificates",
      "nav.downloads": "Downloads",
      "nav.contact": "Contact",
      "all": "All",
      "loading": "Loading…",
      "lang.switch": "เปลี่ยนเป็นภาษาไทย",

      "contact.title": "Contact",
      "contact.bio": "Hi there 👋 I'm a developer who loves building new things. Feel free to reach me through any of the links below.",
      "contact.portfolio": "Portfolio",
      "contact.certs": "Certificates & Activities",
      "contact.downloads": "Downloads",
      "soon": "Coming soon",

      "pf.title": "Portfolio",
      "pf.h1": "Things I've built",
      "pf.sub": "A collection of my projects: websites, apps and small experiments.",
      "pf.demo": "Live demo",
      "pf.code": "Code",
      "pf.repos": "Latest repositories",
      "pf.seeAll": "View all on GitHub →",
      "pf.noRepos": "No public repositories yet",
      "pf.noDesc": "No description",
      "pf.repoErr": "Couldn't load repositories. Please refresh.",
      "pf.ctaH": "Let's work together",
      "pf.ctaP": "Feel free to say hi anytime.",
      "pf.ctaBtn": "Get in touch →",

      "dl.title": "Downloads",
      "dl.sub": "Files, documents and software, ready to download.",
      "dl.search": "Search files…",
      "dl.empty": "No files found",
      "dl.view": "View",
      "dl.download": "Download",
      "dl.openFolder": "Open folder",
      "dl.tip": "💡 All files are hosted on Google Drive. For large files, Google will ask you to confirm. Just click \"Download anyway\".",

      "ac.title": "Certificates & Activities",
      "ac.h1": "Certificates & Activities",
      "ac.sub": "Certificates, awards and activities I've taken part in.",
      "ac.statCert": "Certificates",
      "ac.statAward": "Awards",
      "ac.statAct": "Activities",
      "ac.certs": "🏅 Certificates",
      "ac.acts": "📅 Activities",
      "ac.noCerts": "No certificates yet",
      "ac.noActs": "No activities yet",
      "ac.verify": "Verify certificate ↗",
      "ac.photos": "{n} photos · tap to view",
      "ac.openFolder": "📁 Open full photo folder ↗",
      "ac.details": "View details ↗",
      "ac.close": "Close",
      "ac.prev": "Previous photo",
      "ac.next": "Next photo",
      "ac.viewPhoto": "View photo {n}"
    }
  };

  // ภาษาเริ่มต้น: ที่เคยเลือกไว้ → ภาษาของเครื่อง (ไทย = th, อื่น ๆ = en)
  let lang = null;
  try { lang = localStorage.getItem("lang"); } catch (e) {}
  if (lang !== "th" && lang !== "en") {
    lang = (navigator.language || "").toLowerCase().startsWith("th") ? "th" : "en";
  }

  window.LANG = lang;
  window.t = (key, vars) => {
    let s = I18N[window.LANG][key] ?? I18N.th[key] ?? key;
    if (vars) for (const k in vars) s = s.split(`{${k}}`).join(vars[k]);
    return s;
  };
  // เลือกฟิลด์ภาษาอังกฤษ (xxx_en) ถ้ามี
  window.pick = (obj, field) => (window.LANG === "en" && obj[field + "_en"]) ? obj[field + "_en"] : obj[field];
  window.locale = () => (window.LANG === "th" ? "th-TH" : "en-US");

  function apply() {
    document.documentElement.lang = window.LANG;
    document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = t(el.dataset.i18n); });
    document.querySelectorAll("[data-i18n-ph]").forEach(el => { el.placeholder = t(el.dataset.i18nPh); });
    document.querySelectorAll("[data-i18n-aria]").forEach(el => { el.setAttribute("aria-label", t(el.dataset.i18nAria)); });
    const titleKey = document.body && document.body.dataset.title;
    if (titleKey) document.title = `Rapeepat Dev · ${t(titleKey)}`;
    document.querySelectorAll(".lang-toggle").forEach(b => {
      b.querySelectorAll("[data-l]").forEach(s => s.classList.toggle("on", s.dataset.l === window.LANG));
      b.setAttribute("aria-label", t("lang.switch"));
      b.title = t("lang.switch");
    });
  }

  window.setLang = l => {
    window.LANG = l;
    try { localStorage.setItem("lang", l); } catch (e) {}
    apply();
    document.dispatchEvent(new CustomEvent("langchange"));
  };

  document.addEventListener("click", e => {
    if (e.target.closest(".lang-toggle")) setLang(window.LANG === "th" ? "en" : "th");
  });

  // สไตล์ปุ่มสลับภาษา (liquid glass)
  const css = `
    .lang-toggle {
      position: relative; flex: none;
      display: inline-flex; align-items: center; gap: 2px;
      padding: 3px; border-radius: 999px; cursor: pointer;
      font: inherit; font-size: .76rem; font-weight: 600; letter-spacing: .04em;
      color: rgba(244,246,251,.55);
      background: rgba(255,255,255,.06);
      border: 1px solid rgba(255,255,255,.16);
      box-shadow: inset 0 1px 0 rgba(255,255,255,.3);
      backdrop-filter: blur(16px) saturate(180%); -webkit-backdrop-filter: blur(16px) saturate(180%);
    }
    .lang-toggle span { padding: 5px 9px; border-radius: 999px; transition: background .25s, color .25s; }
    .lang-toggle span.on { color: #f4f6fb; background: rgba(255,255,255,.18); box-shadow: inset 0 1px 0 rgba(255,255,255,.3); }
    .lang-toggle:hover { color: #f4f6fb; }
    .lang-toggle:focus-visible { outline: 2px solid rgba(140,160,255,.7); outline-offset: 2px; }
    .lang-toggle.corner { position: absolute; top: 16px; right: 16px; z-index: 2; }
    .nav .nav-links { margin-left: auto; min-width: 0; }
  `;
  const style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", apply);
  else apply();
})();
