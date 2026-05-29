/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { ShieldAlert, Plus, Edit, Trash2, X, RotateCcw, Save, Grid, ExternalLink, HelpCircle, LockOpen, Briefcase, FileText, Cpu } from "lucide-react";
import { PortfolioItem, SiteTexts, CareerItem, SkillCategory } from "../types";
import { initialPortfolioItems, saveStoredPortfolioItems, saveStoredSiteTexts, defaultSiteTexts, initialCareerItems, saveStoredCareerItems, initialSkills, saveStoredSkills } from "../data";
import { compressImage } from "../lib/imageCompressor";

interface AdminPanelProps {
  onSettingsUpdate: () => void;
  isOpen: boolean;
  onClose: () => void;
  items: PortfolioItem[];
  careerItems: CareerItem[];
  skills: SkillCategory[];
  isAdmin: boolean;
  onSetIsAdmin: (val: boolean) => void;
  siteTexts?: SiteTexts;
}

export default function AdminPanel({
  onSettingsUpdate,
  isOpen,
  onClose,
  items,
  careerItems,
  skills,
  isAdmin,
  onSetIsAdmin,
  siteTexts
}: AdminPanelProps) {
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [activeFormItem, setActiveFormItem] = useState<Partial<PortfolioItem> | null>(null);
  const [activeCareerFormItem, setActiveCareerFormItem] = useState<Partial<CareerItem> | null>(null);
  const [activeSkillFormItem, setActiveSkillFormItem] = useState<Partial<SkillCategory> | null>(null);
  const [activeSkillFormIndex, setActiveSkillFormIndex] = useState<number | null>(null);
  const [toastMessage, setToastMessage] = useState("");
  const [activeTab, setActiveTab] = useState<"portfolio" | "globalText" | "career" | "skills">("globalText");
  const [editableSiteTexts, setEditableSiteTexts] = useState<SiteTexts>(siteTexts || defaultSiteTexts);

  useEffect(() => {
    if (siteTexts) {
      setEditableSiteTexts(siteTexts);
    }
  }, [siteTexts]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "1109") {
      onSetIsAdmin(true);
      setErrorMsg("");
      triggerToast("관리자 로그인 성공. 포트폴리오 제어판이 열렸습니다.");
    } else {
      setErrorMsg("비밀번호가 올바르지 않습니다.");
    }
  };

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage("");
    }, 3500);
  };

  const getYoutubeId = (url: string): string => {
    if (!url) return "";
    let id = "";
    if (url.includes("youtube.com/shorts/")) {
      id = url.split("youtube.com/shorts/")[1]?.split("?")[0]?.split("&")[0];
    } else if (url.includes("youtu.be/")) {
      id = url.split("youtu.be/")[1]?.split("?")[0]?.split("&")[0];
    } else if (url.includes("youtube.com/watch")) {
      try {
        const urlParams = new URLSearchParams(new URL(url).search);
        id = urlParams.get("v") || "";
      } catch (e) {
        const parts = url.split("v=");
        if (parts[1]) {
          id = parts[1].split("&")[0];
        }
      }
    } else if (url.includes("embed/")) {
      id = url.split("embed/")[1]?.split("?")[0]?.split("&")[0];
    }
    return id || "";
  };

  const getYoutubeThumbnailUrl = (url: string, defaultImg: string = ""): string => {
    // If a custom high-quality image is provided, prefer it for gorgeous cinematic overrides
    if (defaultImg && !defaultImg.includes("photo-1619767886558") && defaultImg !== "") {
      return defaultImg;
    }
    const id = getYoutubeId(url);
    if (id) {
      return `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
    }
    return defaultImg || "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&q=80&w=800";
  };

  // Pre-fill form to add new
  const handleAddNewTrigger = () => {
    const nextOrder = items.length > 0 ? Math.max(...items.map(i => i.order || 0)) + 1 : 1;
    setActiveFormItem({
      title: "",
      client: "",
      role: "",
      format: "YOUTUBE CONTENT",
      description: "",
      videoUrl: "",
      imageUrl: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&q=80&w=800",
      previewVideoUrl: "https://player.vimeo.com/external/490898514.sd.mp4?s=c8afbdcf7ad1ea5408a688d0b679a9ccb2f6efba&profile_id=164&oauth2_token_id=57447761",
      equipment: "",
      duration: "05:00",
      date: new Date().toISOString().substring(0, 7), // YYYY-MM
      order: nextOrder
    });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const fileList = Array.from(files);
    const loadedImages: string[] = [];
    let processedCount = 0;

    triggerToast("이미지를 압축하고 최적화하는 중입니다...");

    fileList.forEach((file: File) => {
      compressImage(file, 900, 900, 0.75)
        .then((compressedBase64) => {
          loadedImages.push(compressedBase64);
        })
        .catch((err) => {
          console.error(err);
        })
        .finally(() => {
          processedCount++;
          if (processedCount === fileList.length) {
            setActiveFormItem((prev) => {
              if (!prev) return null;
              const updatedImages = prev.images ? [...prev.images, ...loadedImages] : loadedImages;
              return {
                ...prev,
                images: updatedImages,
                imageUrl: updatedImages[0] || prev.imageUrl || "",
              };
            });
            triggerToast(`${loadedImages.length}장의 사진이 성공적으로 압축되어 정상 업로드되었습니다.`);
          }
        });
    });
  };

  const handleRemoveUploadedImage = (indexToRemove: number) => {
    setActiveFormItem((prev) => {
      if (!prev) return null;
      const filtered = (prev.images || []).filter((_, i) => i !== indexToRemove);
      return {
        ...prev,
        images: filtered,
        imageUrl: filtered[0] || "",
      };
    });
    triggerToast("업로드한 이미지가 삭제되었습니다.");
  };

  // Save/Create item logic
  const handleSaveItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeFormItem?.title || !activeFormItem?.client || !activeFormItem?.videoUrl) {
      alert("프로젝트명, 클라이언트, 영상 링크는 필수 입력값입니다.");
      return;
    }

    const currentItems = [...items];
    const isEditing = !!activeFormItem.id;

    if (isEditing) {
      // Editing existing
      const updatedList = currentItems.map(item => {
        if (item.id === activeFormItem.id) {
          return activeFormItem as PortfolioItem;
        }
        return item;
      });
      saveStoredPortfolioItems(updatedList);
      triggerToast("포트폴리오 정보가 업데이트 되었습니다.");
    } else {
      // Creating new
      const newItem: PortfolioItem = {
        ...(activeFormItem as Omit<PortfolioItem, "id">),
        id: "portfolio-" + Date.now().toString()
      };
      saveStoredPortfolioItems([...currentItems, newItem]);
      triggerToast("새로운 포트폴리오 오토모티브 프로젝트가 등록되었습니다.");
    }

    setActiveFormItem(null);
    onSettingsUpdate();
  };

  const handleDeleteItem = (id: string, name: string) => {
    if (confirm(`'${name}' 포트폴리오를 목록에서 삭제하시겠습니까?`)) {
      const filtered = items.filter(i => i.id !== id);
      saveStoredPortfolioItems(filtered);
      onSettingsUpdate();
      triggerToast("포트폴리오가 삭제 완료되었습니다.");
    }
  };

  const handleRestoreDefaults = () => {
    if (confirm("모든 임의 수정을 지우고 기존 이주원 PD 고유 포트폴리오 템플릿(6개 프로젝트) 데이터 세팅으로 복구하시겠습니까? (이전 추가분 소멸)")) {
      saveStoredPortfolioItems(initialPortfolioItems);
      onSettingsUpdate();
      setActiveFormItem(null);
      triggerToast("모든 포트폴리오 데이터가 초기 디폴트로 원복 정렬되었습니다.");
    }
  };

  const handleSaveSiteTexts = (e: React.FormEvent) => {
    e.preventDefault();
    saveStoredSiteTexts(editableSiteTexts);
    onSettingsUpdate();
    triggerToast("웹사이트 공통 텍스트가 모두 업데이트되어 완벽하게 적용되었습니다!");
  };

  const handleProfileImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    const file = files[0];
    
    triggerToast("프로필 이미지를 압축 가공하는 중입니다...");
    compressImage(file, 800, 800, 0.75)
      .then((compressedBase64) => {
        setEditableSiteTexts((prev) => ({
          ...prev,
          aboutImage: compressedBase64
        }));
        triggerToast("프로필 이미지가 가볍게 압축 탑재되었습니다! 저장을 완료해 주십시오.");
      })
      .catch((err) => {
        console.error(err);
        triggerToast("이미지 압축에 실패했습니다. 올바른 이미지 파일인지 확인하십시오.");
      });
  };

  const handleIDPhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    const file = files[0];
    
    triggerToast("증명사진을 전용 사이즈로 비트매핑 압축 중입니다...");
    compressImage(file, 400, 500, 0.75)
      .then((compressedBase64) => {
        setEditableSiteTexts((prev) => ({
          ...prev,
          profileImage: compressedBase64
        }));
        triggerToast("이력서용 증명사진 규격 압축이 완료되었습니다! 저장을 완료해 주십시오.");
      })
      .catch((err) => {
        console.error(err);
        triggerToast("이미지 압축 가공에 실패했습니다.");
      });
  };

  const handleRestoreSiteTexts = () => {
    if (confirm("웹사이트의 구문/텍스트 수정을 모두 기본값으로 리셋하시겠습니까? (이주원 PD 고유 텍스트 원복)")) {
      saveStoredSiteTexts(defaultSiteTexts);
      setEditableSiteTexts(defaultSiteTexts);
      onSettingsUpdate();
      triggerToast("웹사이트의 모든 텍스트 문구가 최초 디폴트로 복귀되었습니다.");
    }
  };

  const handleAddNewCareerTrigger = () => {
    setActiveCareerFormItem({
      period: "",
      title: "",
      role: "",
      description: ["", ""],
      achievements: [
        { platform: "", metrics: ["", ""], link: "", linkName: "" },
        { platform: "", metrics: ["", ""], link: "", linkName: "" }
      ]
    });
  };

  const handleSaveCareerItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeCareerFormItem?.period || !activeCareerFormItem?.title || !activeCareerFormItem?.role) {
      alert("근속 기간, 소속 및 주요 미디어명, 역할/직책은 필수 입력 사항입니다.");
      return;
    }

    const currentCareerItems = [...careerItems];
    const isEditing = !!activeCareerFormItem.id;

    if (isEditing) {
      const updatedList = currentCareerItems.map(item => {
        if (item.id === activeCareerFormItem.id) {
          return activeCareerFormItem as CareerItem;
        }
        return item;
      });
      saveStoredCareerItems(updatedList);
      triggerToast("경력 사항이 업데이트되었습니다.");
    } else {
      const newItem: CareerItem = {
        ...(activeCareerFormItem as Omit<CareerItem, "id">),
        id: "career-" + Date.now().toString()
      };
      saveStoredCareerItems([...currentCareerItems, newItem]);
      triggerToast("새로운 경력 사항이 등록되었습니다.");
    }

    setActiveCareerFormItem(null);
    onSettingsUpdate();
  };

  const handleDeleteCareerItem = (id: string, name: string) => {
    if (confirm(`'${name}' 경력 아이템을 목록에서 삭제하시겠습니까?`)) {
      const filtered = careerItems.filter(i => i.id !== id);
      saveStoredCareerItems(filtered);
      onSettingsUpdate();
      triggerToast("경력 아이템이 완전히 삭제되었습니다.");
    }
  };

  const handleRestoreCareerDefaults = () => {
    if (confirm("모든 임의 수정을 지우고 대한민국 오토모티브 미디어 커리어 디폴트 셋으로 복구하시겠습니까? (이전 추가분 소멸)")) {
      saveStoredCareerItems(initialCareerItems);
      onSettingsUpdate();
      setActiveCareerFormItem(null);
      triggerToast("모든 경력 아이템 데이터가 초기 디폴트로 복귀 정렬되었습니다.");
    }
  };

  const handleAddNewSkillCategoryTrigger = () => {
    setActiveSkillFormItem({
      category: "",
      skills: []
    });
    setActiveSkillFormIndex(null);
  };

  const handleEditSkillCategoryTrigger = (item: SkillCategory, index: number) => {
    setActiveSkillFormItem({ ...item });
    setActiveSkillFormIndex(index);
  };

  const handleSaveSkillCategory = (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeSkillFormItem?.category) {
      alert("스킬 부문 카테고리명은 필수 사항입니다.");
      return;
    }

    const currentSkills = [...skills];
    const isEditing = activeSkillFormIndex !== null;

    if (isEditing) {
      const updatedList = currentSkills.map((item, idx) => {
        if (idx === activeSkillFormIndex) {
          return activeSkillFormItem as SkillCategory;
        }
        return item;
      });
      saveStoredSkills(updatedList);
      triggerToast("스킬 부문 및 역량이 상세히 업데이트되었습니다.");
    } else {
      saveStoredSkills([...currentSkills, activeSkillFormItem as SkillCategory]);
      triggerToast("새로운 전문 역량 부문이 성공적으로 추가되었습니다.");
    }

    setActiveSkillFormItem(null);
    setActiveSkillFormIndex(null);
    onSettingsUpdate();
  };

  const handleDeleteSkillCategory = (index: number, categoryName: string) => {
    if (confirm(`'${categoryName}' 스킬 카테고리를 완전히 삭제하시겠습니까?`)) {
      const filtered = skills.filter((_, idx) => idx !== index);
      saveStoredSkills(filtered);
      onSettingsUpdate();
      triggerToast("스킬 카테고리 및 관련 정보가 정상적으로 삭제처리되었습니다.");
    }
  };

  const handleRestoreSkillsDefaults = () => {
    if (confirm("모든 임의 수정을 지우고 이주원 PD 고유 스킬 분야 디폴트 셋으로 복구하시겠습니까? (이전 추가분 소멸)")) {
      saveStoredSkills(initialSkills);
      onSettingsUpdate();
      setActiveSkillFormItem(null);
      setActiveSkillFormIndex(null);
      triggerToast("모든 보유 스킬 데이터가 초기 디폴트로 정제 복귀되었습니다.");
    }
  };

  if (!isOpen) return null;

  return (
    <div id="admin-modal-overlay" className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      
      {/* Dynamic Floating Notification */}
      {toastMessage && (
        <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50 px-6 py-3.5 bg-primary-red text-white border border-red-500 rounded-md shadow-2xl flex items-center space-x-3 text-xs tracking-wider font-bold animate-slide-in font-display">
          <span className="inline-block h-2 w-2 rounded-full bg-white animate-ping" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Primary Container card */}
      <div className="relative bg-cinema-card w-full max-w-6xl border border-white/10 rounded-lg shadow-2xl overflow-hidden my-auto max-h-[95vh] flex flex-col justify-between">
        
        {/* Panel Header */}
        <div className="p-6 bg-black border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="p-1.5 bg-primary-red/10 border border-primary-red/40 text-primary-red rounded">
              <ShieldAlert size={16} />
            </span>
            <div>
              <h2 className="text-sm font-bold tracking-widest text-white uppercase font-display">
                PORTFOLIO ADMIN PANEL
              </h2>
              <span className="text-[9px] font-mono tracking-widest text-white/40 block -mt-0.5">
                DATABASE CREDENTIAL PERSISTENCE WORKSPACE
              </span>
            </div>
          </div>

          <button
            id="admin-close-btn"
            onClick={onClose}
            className="p-1.5 hover:bg-neutral-900 border border-transparent hover:border-white/10 text-white/50 hover:text-white rounded-full transition-all cursor-pointer"
            title="패널 닫기"
          >
            <X size={18} />
          </button>
        </div>

        {/* Dynamic Content Switching based on Authenticated Mode */}
        <div className="flex-grow overflow-y-auto p-6 md:p-8">
          
          {!isAdmin ? (
            /* Login Form */
            <div className="max-w-md mx-auto py-12 text-center" id="admin-login-workspace">
              <div className="inline-flex p-4 bg-primary-red/5 border border-primary-red/20 text-primary-red rounded-full mb-6">
                <ShieldAlert size={36} className="animate-pulse" />
              </div>

              <h2 className="text-md sm:text-lg font-bold text-white tracking-widest font-display">
                CREW ONLY PORTAL GATE
              </h2>
              <p className="text-xs text-white/50 mt-2 max-w-sm mx-auto leading-relaxed font-light">
                이주원 PD의 시뮬레이션 포트폴리오 관리를 위해 관리자 비밀번호를 입력해 주십시오. 
              </p>

              <form onSubmit={handleLogin} className="mt-8 space-y-4">
                <div className="text-left space-y-1">
                  <label htmlFor="admin-pass" className="block text-[10px] tracking-widest font-mono text-white/40">
                    PASS KEY INTERRUPT
                  </label>
                  <input
                    required
                    autoFocus
                    type="password"
                    id="admin-pass"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="비밀번호를 입력하세요"
                    className="w-full bg-black border border-white/10 focus:border-primary-red outline-none px-4 py-3 text-center text-sm font-mono tracking-widest text-white rounded transition-colors"
                  />
                </div>

                {errorMsg && (
                  <p className="text-[11px] text-primary-red font-mono tracking-wide" id="admin-login-error">
                    {errorMsg}
                  </p>
                )}

                <button
                  id="admin-auth-submit"
                  type="submit"
                  className="w-full py-3 bg-primary-red hover:bg-primary-red/90 text-xs font-bold tracking-widest font-display text-white rounded cursor-pointer border border-primary-red transition-all duration-300"
                >
                  보안 시스템 해제
                </button>
              </form>
              
              <div className="mt-6 text-[10px] text-white/30 font-mono">
                System access is regulated under secure protocol.
              </div>
            </div>
          ) : (
            /* Master Dashboard */
            <div id="admin-dashboard-workspace" className="space-y-8 animate-fade-in font-sans">
              
              {/* Tab Switching Menu */}
              <div className="flex border-b border-white/10 space-x-4 pb-2 mb-8 flex-wrap gap-y-3" id="admin-tab-switcher">
                <button
                  type="button"
                  onClick={() => { setActiveTab("globalText"); setActiveFormItem(null); setActiveCareerFormItem(null); }}
                  className={`pb-3 px-3 text-sm sm:text-base font-bold tracking-widest font-display transition-all relative cursor-pointer ${
                    activeTab === "globalText"
                      ? "text-primary-red font-black border-b-2 border-primary-red"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  <span>✍️ 기본 정보 & 슬로건 수정</span>
                </button>

                <button
                  type="button"
                  onClick={() => { setActiveTab("portfolio"); setActiveFormItem(null); setActiveCareerFormItem(null); }}
                  className={`pb-3 px-3 text-sm sm:text-base font-bold tracking-widest font-display transition-all relative cursor-pointer ${
                    activeTab === "portfolio"
                      ? "text-primary-red font-black border-b-2 border-primary-red"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  <span>🎬 포트폴리오 비디오 관리</span>
                </button>

                <button
                  type="button"
                  onClick={() => { setActiveTab("career"); setActiveFormItem(null); setActiveCareerFormItem(null); setActiveSkillFormItem(null); }}
                  className={`pb-3 px-3 text-sm sm:text-base font-bold tracking-widest font-display transition-all relative cursor-pointer ${
                    activeTab === "career"
                      ? "text-primary-red font-black border-b-2 border-primary-red"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  <span>💼 경력 사항 & 성과 관리</span>
                </button>

                <button
                  type="button"
                  onClick={() => { setActiveTab("skills"); setActiveFormItem(null); setActiveCareerFormItem(null); setActiveSkillFormItem(null); }}
                  className={`pb-3 px-3 text-sm sm:text-base font-bold tracking-widest font-display transition-all relative cursor-pointer ${
                    activeTab === "skills"
                      ? "text-primary-red font-black border-b-2 border-primary-red"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  <span>🛠️ 전문 보유 역량 관리</span>
                </button>
              </div>

              {activeTab === "portfolio" && activeFormItem && (
                /* Add / Edit Form */
                <form onSubmit={handleSaveItem} className="space-y-8 bg-neutral-900/40 p-8 rounded-xl border border-white/10 shadow-xl" id="portfolio-project-form">
                  <div className="flex items-center justify-between border-b border-white/10 pb-5 mb-6">
                    <h3 className="text-base sm:text-lg font-bold tracking-wider text-primary-red flex items-center font-display uppercase">
                      <Edit size={18} className="mr-2.5" />
                      <span>{activeFormItem.id ? "🎬 기존 포트폴리오 편집" : "➕ 새 포트폴리오 영상 추가 등록"}</span>
                    </h3>
                    <button
                      type="button"
                      onClick={() => setActiveFormItem(null)}
                      className="text-sm text-white/70 hover:text-white flex items-center bg-white/5 hover:bg-white/10 px-4 py-2 rounded-md transition-all cursor-pointer border border-white/5"
                    >
                      <X size={16} className="mr-1.5" />
                      편집 취소
                    </button>
                  </div>

                  {/* Form fields: Row 1 Title & Client */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-xs sm:text-sm font-semibold tracking-wide text-white/90">프로젝트 타이틀명 *</label>
                      <input
                        required
                        type="text"
                        placeholder="이름 (예: ELECTRIC PICKUP TOWING)"
                        value={activeFormItem.title || ""}
                        onChange={(e) => setActiveFormItem({ ...activeFormItem, title: e.target.value.toUpperCase() })}
                        className="w-full bg-neutral-950 border border-white/15 focus:border-primary-red focus:bg-black outline-none px-4 py-3 text-sm sm:text-base text-white rounded-md transition-all font-medium placeholder:text-white/30"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs sm:text-sm font-semibold tracking-wide text-white/90">클라이언트/브랜드 광고주 *</label>
                      <input
                        required
                        type="text"
                        placeholder="클라이언트 사명 (예: KTRAILER)"
                        value={activeFormItem.client || ""}
                        onChange={(e) => setActiveFormItem({ ...activeFormItem, client: e.target.value })}
                        className="w-full bg-neutral-950 border border-white/15 focus:border-primary-red focus:bg-black outline-none px-4 py-3 text-sm sm:text-base text-white rounded-md transition-all font-medium placeholder:text-white/30"
                      />
                    </div>
                  </div>

                  {/* Row 2 : Format & Primary Role */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-xs sm:text-sm font-semibold tracking-wide text-white/90">비디오 포맷 카테고리</label>
                      <select
                        value={activeFormItem.format || "YOUTUBE LONG"}
                        onChange={(e) => setActiveFormItem({ ...activeFormItem, format: e.target.value })}
                        className="w-full bg-neutral-950 border border-white/15 focus:border-primary-red focus:bg-black outline-none px-4 py-3 text-sm sm:text-base text-white rounded-md transition-all font-medium cursor-pointer"
                      >
                        <option value="PROMOTION">PROMOTION (홍보)</option>
                        <option value="YOUTUBE LONG">YOUTUBE LONG (유튜브 롱폼)</option>
                        <option value="SHORTS">SHORTS (릴스/숏폼)</option>
                        <option value="INTERVIEW">INTERVIEW (다큐 인물 인터뷰)</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs sm:text-sm font-semibold tracking-wide text-white/90">담당 메인 역할 *</label>
                      <input
                        required
                        type="text"
                        placeholder="역할 (예: Cinematography / Drone FPV / Editing)"
                        value={activeFormItem.role || ""}
                        onChange={(e) => setActiveFormItem({ ...activeFormItem, role: e.target.value })}
                        className="w-full bg-neutral-950 border border-white/15 focus:border-primary-red focus:bg-black outline-none px-4 py-3 text-sm sm:text-base text-white rounded-md transition-all font-medium placeholder:text-white/30"
                      />
                    </div>
                  </div>

                  {/* Row 3 : Video URL & Thumbnail Cover URL */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-xs sm:text-sm font-semibold tracking-wide text-white/90 flex items-center justify-between">
                        <span>YouTube 동영상 링크 *</span>
                        <span className="text-xs text-amber-500 font-medium tracking-tight">수정 시 대표 썸네일도 자동 연동</span>
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="예: https://www.youtube.com/watch?v=S_7b6O5YqW4"
                        value={activeFormItem.videoUrl || ""}
                        onChange={(e) => setActiveFormItem({ ...activeFormItem, videoUrl: e.target.value })}
                        className="w-full bg-neutral-950 border border-white/15 focus:border-primary-red focus:bg-black outline-none px-4 py-3 text-sm sm:text-base text-white rounded-md transition-all font-medium placeholder:text-white/30"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs sm:text-sm font-semibold tracking-wide text-white/90">대표 썸네일 이미지 URL (또는 아래에서 파일 직접 업로드)</label>
                      <input
                        type="text"
                        placeholder="Unsplash / Pexels 또는 자동 세팅된 주소"
                        value={activeFormItem.imageUrl || ""}
                        onChange={(e) => setActiveFormItem({ ...activeFormItem, imageUrl: e.target.value })}
                        className="w-full bg-neutral-950 border border-white/15 focus:border-primary-red focus:bg-black outline-none px-4 py-3 text-sm sm:text-base text-white rounded-md transition-all font-mono placeholder:text-white/30"
                      />
                    </div>
                  </div>

                  {/* Local computer File Upload system for multiple images */}
                  <div className="space-y-3 bg-black/60 p-6 border border-white/10 rounded-xl">
                    <label className="text-xs sm:text-sm tracking-wide text-primary-red font-bold block uppercase">
                      📁 내 컴퓨터에서 포트폴리오 스냅샷 이미지 파일 직접 업로드 (다중 선택 가능)
                    </label>
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-black/40 p-4 border border-white/10 rounded-lg">
                      <div className="flex-1">
                        <input
                          type="file"
                          multiple
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="hidden"
                          id="admin-image-file-input"
                        />
                        <label
                          htmlFor="admin-image-file-input"
                          className="inline-flex items-center space-x-2 px-6 py-3 bg-neutral-800 hover:bg-neutral-700 hover:border-primary-red text-white hover:text-primary-red text-sm font-bold tracking-widest rounded-md border border-white/15 cursor-pointer transition-all duration-200"
                        >
                          <span>📂 이미지 파일 업로드 선택</span>
                        </label>
                        <p className="text-xs text-white/40 mt-2 leading-relaxed">
                          * 단일 또는 다중 이미지 파일을 직접 선택하여 추가해 주십시오. 썸네일은 첫 번째 이미지로 자동 세팅됩니다.
                        </p>
                      </div>
                    </div>

                    {/* Uploaded Base64 Multiple Files array layout */}
                    {activeFormItem.images && activeFormItem.images.length > 0 && (
                      <div className="space-y-3 mt-4 bg-black/20 p-4 rounded-lg border border-white/5">
                        <p className="text-xs font-bold text-white/60 tracking-wider">업로드 완료된 포트폴리오 스냅샷 목록 ({activeFormItem.images.length}장):</p>
                        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
                          {activeFormItem.images.map((img, idx) => (
                            <div key={idx} className="relative aspect-[16/9] rounded-md overflow-hidden border border-white/15 bg-black/90 group transition-all hover:border-primary-red/50">
                              <img src={img} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                              <button
                                type="button"
                                onClick={() => handleRemoveUploadedImage(idx)}
                                className="absolute top-1.5 right-1.5 p-1.5 bg-black/90 hover:bg-primary-red text-white rounded-full border border-white/15 opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer"
                                title="이미지 삭제"
                              >
                                <X size={12} />
                              </button>
                              <span className="absolute bottom-1.5 left-1.5 px-2 py-0.5 bg-black/85 text-[10px] font-mono text-white rounded border border-white/10 font-bold">
                                #{idx + 1}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Row 4: Hover Looping MP4 & Operating Equipment */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-xs sm:text-sm font-semibold tracking-wide text-white/90 flex items-center justify-between">
                        <span>호버 시 자동 무음 재생용 비디오 direct MP4 링크</span>
                        <span className="text-xs text-white/40 cursor-help underline decoration-dotted" title="마우스를 올렸을 때 백그라운드로 로딩할 direct mp4 경로입니다.">도움말</span>
                      </label>
                      <input
                        type="text"
                        placeholder="예: https://player.vimeo.com/external/49...mp4"
                        value={activeFormItem.previewVideoUrl || ""}
                        onChange={(e) => setActiveFormItem({ ...activeFormItem, previewVideoUrl: e.target.value })}
                        className="w-full bg-neutral-950 border border-white/15 focus:border-primary-red focus:bg-black outline-none px-4 py-3 text-sm sm:text-base text-white rounded-md transition-all font-medium placeholder:text-white/30"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs sm:text-sm font-semibold tracking-wide text-white/90">촬영 및 편집 기종/장비 사양 목록</label>
                      <input
                        type="text"
                        placeholder="사용 기종 (예: Sony FX3, DJI Mavic 3 Cine, DaVinci)"
                        value={activeFormItem.equipment || ""}
                        onChange={(e) => setActiveFormItem({ ...activeFormItem, equipment: e.target.value })}
                        className="w-full bg-neutral-950 border border-white/15 focus:border-primary-red focus:bg-black outline-none px-4 py-3 text-sm sm:text-base text-white rounded-md transition-all font-medium placeholder:text-white/30"
                      />
                    </div>
                  </div>

                  {/* Row 5: Year Production, Duration length, Order sorting index */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                    <div className="space-y-2">
                      <label className="text-xs sm:text-sm font-semibold tracking-wide text-white/90">제작 세부 년/월</label>
                      <input
                        type="text"
                        placeholder="예: 2025-06"
                        value={activeFormItem.date || ""}
                        onChange={(e) => setActiveFormItem({ ...activeFormItem, date: e.target.value })}
                        className="w-full bg-neutral-950 border border-white/15 focus:border-primary-red focus:bg-black outline-none px-4 py-3 text-sm sm:text-base text-white rounded-md transition-all font-medium placeholder:text-white/30"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs sm:text-sm font-semibold tracking-wide text-white/90">영상 상영 시간</label>
                      <input
                        type="text"
                        placeholder="예: 08:45"
                        value={activeFormItem.duration || ""}
                        onChange={(e) => setActiveFormItem({ ...activeFormItem, duration: e.target.value })}
                        className="w-full bg-neutral-950 border border-white/15 focus:border-primary-red focus:bg-black outline-none px-4 py-3 text-sm sm:text-base text-white rounded-md transition-all font-medium placeholder:text-white/30"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs sm:text-sm font-semibold tracking-wide text-white/90">정렬 출력 순서번호 *</label>
                      <input
                        required
                        type="number"
                        min="1"
                        placeholder="출력순서 예: 1"
                        value={activeFormItem.order || 1}
                        onChange={(e) => setActiveFormItem({ ...activeFormItem, order: parseInt(e.target.value) || 1 })}
                        className="w-full bg-neutral-950 border border-white/15 focus:border-primary-red focus:bg-black outline-none px-4 py-3 text-sm sm:text-base text-white rounded-md transition-all font-medium placeholder:text-white/30"
                      />
                    </div>
                  </div>

                  {/* Description Box Story intent */}
                  <div className="space-y-2">
                    <label className="text-xs sm:text-sm font-semibold tracking-wide text-white/90">공식 기획 의도 및 연출 부가 개요 *</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="이 비디오 프로젝트에서 이주원 PD가 주력한 부분 및 고객 인게이지먼트 타겟을 기록하십시오."
                      value={activeFormItem.description || ""}
                      onChange={(e) => setActiveFormItem({ ...activeFormItem, description: e.target.value })}
                      className="w-full bg-neutral-950 border border-white/15 focus:border-primary-red focus:bg-black outline-none px-4 py-3 text-sm sm:text-base text-white rounded-md leading-relaxed resize-y font-sans font-medium placeholder:text-white/30"
                    />
                  </div>

                  {/* Save forms action trigger button */}
                  <button
                    id="project-save-btn"
                    type="submit"
                    className="w-full py-4 bg-primary-red hover:bg-rose-600 font-display text-sm sm:text-base text-white font-extrabold tracking-widest flex items-center justify-center space-x-2 rounded-md transition-all duration-200 cursor-pointer shadow-lg hover:shadow-primary-red/10 uppercase"
                  >
                    <Save size={18} />
                    <span>{activeFormItem.id ? "🎬 기존 프로젝트 수정 완료 및 적용" : "➕ 새 오토모티브 프로젝트 등록"}</span>
                  </button>
                </form>
              )}

              {/* Tab 1: Global Site Texts Form */}
              {activeTab === "globalText" && (
                    <form onSubmit={handleSaveSiteTexts} className="space-y-8 bg-neutral-900/40 p-8 rounded-xl border border-white/10 shadow-xl" id="admin-global-texts-form">
                      <div className="flex items-center justify-between border-b border-white/10 pb-5 mb-6">
                        <div>
                          <h3 className="text-base sm:text-lg font-extrabold text-white tracking-wider font-display uppercase">
                            ✍️ 주 미디어 정보 & 포트폴리오 슬로건 제어판
                          </h3>
                          <p className="text-xs sm:text-sm text-white/50 mt-1">웹사이트 곳곳에 적용되어 있는 주요 타이틀, 소개 내용 및 인적 메트릭을 손쉽게 수정합니다.</p>
                        </div>
                        <button
                          type="button"
                          onClick={handleRestoreSiteTexts}
                          className="px-4 py-2 bg-neutral-800 border border-white/15 text-white/80 hover:text-white hover:bg-neutral-700 hover:border-primary-red text-xs font-bold tracking-wide rounded-md flex items-center space-x-1.5 cursor-pointer transition-colors"
                          title="이주원 PD의 기본 문구 디폴트값으로 원복시킵니다."
                        >
                          <RotateCcw size={14} />
                          <span>기본 문구 복원</span>
                        </button>
                      </div>

                      {/* Section 1: Hero Settings */}
                      <div className="space-y-6">
                        <h4 className="text-sm sm:text-base font-bold text-primary-red font-display tracking-wider uppercase border-l-3 border-primary-red pl-3">
                          1. 히어로 랜딩 영역 메인 문구 (Hero Slogans)
                        </h4>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div className="space-y-2">
                            <label className="text-xs sm:text-sm font-semibold tracking-wide text-white/90 uppercase">태그라인 데코레이션 (Tagline)</label>
                            <input
                              required
                              type="text"
                              value={editableSiteTexts.heroTagline}
                              onChange={(e) => setEditableSiteTexts({ ...editableSiteTexts, heroTagline: e.target.value })}
                              className="w-full bg-neutral-950 border border-white/15 focus:border-primary-red focus:bg-black outline-none px-4 py-3 text-sm sm:text-base text-white rounded-md transition-all font-medium placeholder:text-white/30"
                            />
                          </div>

                          <div className="space-y-2">
                            <label className="text-xs sm:text-sm font-semibold tracking-wide text-white/90 uppercase font-bold">인적 사항 - 이름 (Profile Name)</label>
                            <input
                              required
                              type="text"
                              value={editableSiteTexts.profileName}
                              onChange={(e) => setEditableSiteTexts({ ...editableSiteTexts, profileName: e.target.value })}
                              className="w-full bg-neutral-950 border border-white/15 focus:border-primary-red focus:bg-black outline-none px-4 py-3 text-sm sm:text-base text-white rounded-md transition-all font-medium placeholder:text-white/30"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div className="space-y-2">
                            <label className="text-xs sm:text-sm font-semibold tracking-wide text-white/90 uppercase">메인 대형 타이틀 - 윗줄 (Title Line 1)</label>
                            <input
                              required
                              type="text"
                              value={editableSiteTexts.heroTitle}
                              onChange={(e) => setEditableSiteTexts({ ...editableSiteTexts, heroTitle: e.target.value })}
                              className="w-full bg-neutral-950 border border-white/15 focus:border-primary-red focus:bg-black outline-none px-4 py-3 text-sm sm:text-base text-white rounded-md transition-all font-medium placeholder:text-white/30"
                            />
                          </div>

                          <div className="space-y-2">
                            <label className="text-xs sm:text-sm font-semibold tracking-wide text-white/90 uppercase">메인 대형 타이틀 - 아랫줄 (Title Line 2)</label>
                            <input
                              required
                              type="text"
                              value={editableSiteTexts.heroSubtitle}
                              onChange={(e) => setEditableSiteTexts({ ...editableSiteTexts, heroSubtitle: e.target.value })}
                              className="w-full bg-neutral-950 border border-white/15 focus:border-primary-red focus:bg-black outline-none px-4 py-3 text-sm sm:text-base text-white rounded-md transition-all font-medium placeholder:text-white/30"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-xs sm:text-sm font-semibold tracking-wide text-white/90 uppercase font-bold">브랜드 한 줄 메인 슬로건 (Slogan)</label>
                          <input
                            required
                            type="text"
                            value={editableSiteTexts.heroSlogan}
                            onChange={(e) => setEditableSiteTexts({ ...editableSiteTexts, heroSlogan: e.target.value })}
                            className="w-full bg-neutral-950 border border-white/15 focus:border-primary-red focus:bg-black outline-none px-4 py-3 text-sm sm:text-base text-white rounded-md transition-all font-medium placeholder:text-white/30"
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div className="space-y-2">
                            <label className="text-xs sm:text-sm font-semibold tracking-wide text-white/90 uppercase">핵심 역량 특장점 1 (Competency 1)</label>
                            <input
                              required
                              type="text"
                              value={editableSiteTexts.heroCompetence1}
                              onChange={(e) => setEditableSiteTexts({ ...editableSiteTexts, heroCompetence1: e.target.value })}
                              className="w-full bg-neutral-950 border border-white/15 focus:border-primary-red focus:bg-black outline-none px-4 py-3 text-sm sm:text-base text-white rounded-md transition-all font-medium placeholder:text-white/30"
                            />
                          </div>

                          <div className="space-y-2">
                            <label className="text-xs sm:text-sm font-semibold tracking-wide text-white/90 uppercase">핵심 역량 특장점 2 (Competency 2)</label>
                            <input
                              required
                              type="text"
                              value={editableSiteTexts.heroCompetence2}
                              onChange={(e) => setEditableSiteTexts({ ...editableSiteTexts, heroCompetence2: e.target.value })}
                              className="w-full bg-neutral-950 border border-white/15 focus:border-primary-red focus:bg-black outline-none px-4 py-3 text-sm sm:text-base text-white rounded-md transition-all font-medium placeholder:text-white/30"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Section 2: Contact/Metrics Profile */}
                      <div className="space-y-6 pt-6 border-t border-white/10">
                        <h4 className="text-sm sm:text-base font-bold text-primary-red font-display tracking-wider uppercase border-l-3 border-primary-red pl-3">
                          2. 하단 프로필 인적 사항 메트릭스 (Personnel Metrics)
                        </h4>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                          <div className="space-y-2">
                            <label className="text-xs sm:text-sm font-semibold tracking-wide text-white/90 uppercase">나이 (Age Metric)</label>
                            <input
                              required
                              type="text"
                              value={editableSiteTexts.profileAge}
                              onChange={(e) => setEditableSiteTexts({ ...editableSiteTexts, profileAge: e.target.value })}
                              className="w-full bg-neutral-950 border border-white/15 focus:border-primary-red focus:bg-black outline-none px-4 py-3 text-sm sm:text-base text-white rounded-md transition-all font-medium placeholder:text-white/30"
                            />
                          </div>

                          <div className="space-y-2">
                            <label className="text-xs sm:text-sm font-semibold tracking-wide text-white/90 uppercase">연락처 전화번호 (Phone Number)</label>
                            <input
                              required
                              type="text"
                              value={editableSiteTexts.profilePhone}
                              onChange={(e) => setEditableSiteTexts({ ...editableSiteTexts, profilePhone: e.target.value })}
                              className="w-full bg-neutral-950 border border-white/15 focus:border-primary-red focus:bg-black outline-none px-4 py-3 text-sm sm:text-base text-white rounded-md transition-all font-medium placeholder:text-white/30"
                            />
                          </div>

                          <div className="space-y-2">
                            <label className="text-xs sm:text-sm font-semibold tracking-wide text-white/90 uppercase">이메일 주소 (Email Address)</label>
                            <input
                              required
                              type="text"
                              value={editableSiteTexts.profileEmail}
                              onChange={(e) => setEditableSiteTexts({ ...editableSiteTexts, profileEmail: e.target.value })}
                              className="w-full bg-neutral-950 border border-white/15 focus:border-primary-red focus:bg-black outline-none px-4 py-3 text-sm sm:text-base text-white rounded-md transition-all font-medium placeholder:text-white/30"
                            />
                          </div>
                        </div>

                        {/* ID Photo File Upload Section */}
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 bg-black/60 p-6 border border-white/10 rounded-xl mt-6">
                          <div className="md:col-span-4 flex flex-col items-center justify-center md:border-r border-white/15 pr-6">
                            <span className="text-xs font-semibold tracking-wide text-white/70 uppercase block mb-3 text-center">선택된 증명사진 예시</span>
                            <div className="w-28 h-36 bg-neutral-950 border border-white/15 rounded-md overflow-hidden relative font-sans shadow-lg">
                              <img
                                src={editableSiteTexts.profileImage || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"}
                                alt="ID Photo Preview"
                                className="w-full h-full object-cover"
                                referrerPolicy="no-referrer"
                              />
                            </div>
                          </div>
                          <div className="md:col-span-8 flex flex-col justify-center gap-3">
                            <span className="text-xs sm:text-sm font-bold text-primary-red uppercase">👤 인적 사항 증명사진 파일 실시간 업로드 (ID Photo)</span>
                            <p className="text-xs text-white/50 leading-relaxed font-sans">내 컴퓨터에서 본인 인물 증명사진을 선택하여 실시간으로 업로드하십시오. 이름 왼쪽에 독립된 카드 형태로 즉각 노출됩니다.</p>
                            
                            <label className="mt-2 inline-flex items-center justify-center px-5 py-3 border border-dashed border-white/30 hover:border-primary-red/50 bg-neutral-950 hover:bg-primary-red/5 rounded-md text-sm text-white/95 hover:text-white cursor-pointer transition-all duration-200">
                              <span className="font-semibold tracking-wide text-xs sm:text-sm">📁 컴퓨터에서 증명사진 파일 선택 (.jpg / .png / .webp)</span>
                              <input
                                type="file"
                                accept="image/*"
                                onChange={handleIDPhotoUpload}
                                className="hidden"
                              />
                            </label>
                          </div>
                        </div>
                      </div>

                      {/* Section 3: About Settings */}
                      <div className="space-y-6 pt-6 border-t border-white/10">
                        <h4 className="text-sm sm:text-base font-bold text-primary-red font-display tracking-wider uppercase border-l-3 border-primary-red pl-3">
                          3. 어바웃 소개 내용 및 스토리 피치 (Producer Biography)
                        </h4>

                        <div className="space-y-2">
                          <label className="text-xs sm:text-sm font-semibold tracking-wide text-white/90 uppercase">피치 어바웃 서브 태그라인 (About Tagline)</label>
                          <input
                            required
                            type="text"
                            value={editableSiteTexts.aboutTagline}
                            onChange={(e) => setEditableSiteTexts({ ...editableSiteTexts, aboutTagline: e.target.value })}
                            className="w-full bg-neutral-950 border border-white/15 focus:border-primary-red focus:bg-black outline-none px-4 py-3 text-sm sm:text-base text-white rounded-md transition-all font-medium placeholder:text-white/30"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="text-xs sm:text-sm font-semibold tracking-wide text-white/90 uppercase">인사말 헤드라인 타이틀 (About Header)</label>
                          <textarea
                            required
                            rows={2}
                            value={editableSiteTexts.aboutTitle}
                            onChange={(e) => setEditableSiteTexts({ ...editableSiteTexts, aboutTitle: e.target.value })}
                            className="w-full bg-neutral-950 border border-white/15 focus:border-primary-red focus:bg-black outline-none px-4 py-3 text-sm sm:text-base text-white rounded-md leading-relaxed resize-y font-sans font-medium placeholder:text-white/30"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="text-xs sm:text-sm font-semibold tracking-wide text-white/90 uppercase">소개 상세 설명 기획 카피 (About Bio Copys)</label>
                          <textarea
                            required
                            rows={4}
                            value={editableSiteTexts.aboutDescription}
                            onChange={(e) => setEditableSiteTexts({ ...editableSiteTexts, aboutDescription: e.target.value })}
                            className="w-full bg-neutral-950 border border-white/15 focus:border-primary-red focus:bg-black outline-none px-4 py-3 text-sm sm:text-base text-white rounded-md leading-relaxed resize-y font-sans font-medium placeholder:text-white/30"
                          />
                        </div>

                        {/* Profile Photo Uploader Section */}
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 bg-black/60 p-6 border border-white/10 rounded-xl mt-6">
                          <div className="md:col-span-4 flex flex-col items-center justify-center md:border-r border-white/15 pr-6">
                            <span className="text-xs font-semibold tracking-wide text-white/70 uppercase block mb-3 text-center">선택된 프로필 이미지 예시</span>
                            <div className="w-28 h-36 bg-neutral-950 border border-white/15 rounded-md overflow-hidden relative font-sans shadow-lg">
                              <img
                                src={editableSiteTexts.aboutImage || "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=800"}
                                alt="Profile Thumbnail Preview"
                                className="w-full h-full object-cover grayscale brightness-90"
                              />
                            </div>
                          </div>
                          <div className="md:col-span-8 flex flex-col justify-center gap-3">
                            <span className="text-xs sm:text-sm font-bold text-primary-red uppercase">👤 PRODUCER 프로필 본인 이미지 업로드</span>
                            <p className="text-xs text-white/50 leading-relaxed font-sans">내 컴퓨터에서 본인 인물 사진 또는 분위기 있는 전문적인 스튜디오 촬영 백그라운드를 선택하여 실시간 업데이트 하십시오.</p>
                            
                            <label className="mt-2 inline-flex items-center justify-center px-5 py-3 border border-dashed border-white/30 hover:border-primary-red/50 bg-neutral-950 hover:bg-primary-red/5 rounded-md text-sm text-white/95 hover:text-white cursor-pointer transition-all duration-200">
                              <span className="font-semibold tracking-wide text-xs sm:text-sm">📁 컴퓨터에서 본인 사진 선택 (.jpg / .png / .webp)</span>
                              <input
                                type="file"
                                accept="image/*"
                                onChange={handleProfileImageUpload}
                                className="hidden"
                              />
                            </label>
                          </div>
                        </div>
                      </div>

                      {/* Save action trigger button */}
                      <button
                        type="submit"
                        className="w-full py-4 bg-primary-red hover:bg-rose-600 font-display text-sm sm:text-base text-white font-extrabold tracking-widest flex items-center justify-center space-x-2 rounded-md transition-colors cursor-pointer border border-primary-red shadow-lg hover:shadow-primary-red/10 uppercase"
                      >
                        <Save size={18} />
                        <span>✍️ 대표 상양 정보 및 사이트 텍스트 전체 즉각 적용</span>
                      </button>
                    </form>
                  )}

                  {activeTab === "portfolio" && !activeFormItem && (
                    <>
                      {/* Dashboard HUD controllers row */}
                      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-black/40 p-4 border border-white/5 rounded">
                        <div>
                          <span className="text-white font-bold text-xs">포트폴리오 비디오 데이터 제어총괄</span>
                          <p className="text-[9px] text-white/40 mt-0.5">총 {items.length}개의 비디오 프로덕션 데이터가 로드되었습니다.</p>
                        </div>

                        <div className="flex flex-wrap items-center gap-3">
                          <button
                            id="admin-new-project-btn"
                            onClick={handleAddNewTrigger}
                            className="px-4 py-2 bg-primary-red hover:bg-primary-red/90 text-[10px] tracking-widest font-display font-black text-white rounded cursor-pointer flex items-center space-x-1 border border-primary-red shadow-lg shadow-primary-red/15"
                          >
                            <Plus size={12} />
                            <span>새 비디오 추가</span>
                          </button>

                          <button
                            id="admin-restore-btn"
                            onClick={handleRestoreDefaults}
                            className="px-3 py-2 bg-neutral-900 border border-white/10 text-white/60 hover:text-primary-red hover:border-primary-red rounded text-[10px] tracking-widest font-mono flex items-center space-x-1 cursor-pointer"
                            title="모든 개별수정을 지우고 이주원PD 디폴트 6개 데이터로 순수 리셋합니다."
                          >
                            <RotateCcw size={11} />
                            <span>DEFAULT 복구</span>
                          </button>
                        </div>
                      </div>

                      {/* Data list rows structure representing rows layout */}
                      <div className="border border-white/10 rounded overflow-hidden">
                        
                        <div className="grid grid-cols-12 bg-black py-3 px-4 font-mono text-[9px] text-white/40 uppercase tracking-wider border-b border-white/5 font-bold">
                          <span className="col-span-1 text-center">ORDER</span>
                          <span className="col-span-5">PROJECT NAME / AGENCY</span>
                          <span className="col-span-3">FORMAT BADGE</span>
                          <span className="col-span-3 text-right">ACTION POOL</span>
                        </div>

                        <div className="divide-y divide-white/5">
                          {[...items]
                            .sort((a, b) => a.order - b.order)
                            .map((item, index) => (
                              <div
                                key={item.id}
                                id={`admin-row-${item.id}`}
                                className="grid grid-cols-12 py-3.5 px-4 text-xs font-sans items-center hover:bg-white/[0.01]"
                              >
                                
                                {/* Sort sorting order column */}
                                <span className="col-span-1 text-center font-mono font-bold text-white/50">
                                  #{item.order}
                                </span>

                                {/* Title & Organization Client */}
                                <div className="col-span-5 flex items-center space-x-3 pr-2">
                                  <img
                                    src={getYoutubeThumbnailUrl(item.videoUrl, item.imageUrl)}
                                    alt={item.title}
                                    referrerPolicy="no-referrer"
                                    onError={(e) => {
                                      const id = getYoutubeId(item.videoUrl);
                                      if (id && e.currentTarget.src.includes("maxresdefault.jpg")) {
                                        e.currentTarget.src = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
                                      }
                                    }}
                                    className="w-12 h-7 object-cover rounded bg-black/50 border border-white/5 shrink-0"
                                  />
                                  <div className="truncate">
                                    <p className="font-bold text-white truncate text-xs font-display">{item.title}</p>
                                    <p className="text-[9px] font-mono text-white/35 truncate mt-0.5">{item.client}</p>
                                  </div>
                                </div>

                                {/* Badge type label category */}
                                <span className="col-span-3">
                                  <span className="px-2 py-0.5 bg-white/5 border border-white/15 rounded text-[8px] tracking-wider text-white/80 font-mono">
                                    {item.format}
                                  </span>
                                </span>

                                {/* Modify Delete Action columns links */}
                                <div className="col-span-3 flex items-center justify-end space-x-2">
                                  <button
                                    id={`edit-item-${item.id}`}
                                    onClick={() => setActiveFormItem(item)}
                                    className="p-1 px-2.5 bg-zinc-900 border border-white/5 hover:border-primary-red/50 hover:bg-primary-red/10 text-white/60 hover:text-white text-[10px] tracking-wide rounded cursor-pointer transition-colors"
                                  >
                                    수정
                                  </button>
                                  
                                  <button
                                    id={`delete-item-${item.id}`}
                                    onClick={() => handleDeleteItem(item.id, item.title)}
                                    className="p-1 hover:bg-primary-red/20 text-white/35 hover:text-primary-red rounded transition-colors cursor-pointer"
                                    title="삭제하기"
                                  >
                                    <Trash2 size={13} />
                                  </button>
                                </div>

                              </div>
                            ))}
                        </div>

                      </div>
                    </>
                  )}

                  {/* 3. Career compilation tab */}
                  {activeTab === "career" && activeCareerFormItem && (
                    <form onSubmit={handleSaveCareerItem} className="space-y-8 bg-neutral-900/40 p-8 rounded-xl border border-white/10 shadow-xl font-sans animate-fade-in" id="career-item-form">
                      {/* Header */}
                      <div className="flex items-center justify-between border-b border-white/10 pb-5 mb-6">
                        <h3 className="text-base sm:text-lg font-bold tracking-wider text-primary-red flex items-center font-display uppercase">
                          <Briefcase size={18} className="mr-2.5" />
                          <span>{activeCareerFormItem.id ? "💼 기존 경력 노드 정보 수정" : "➕ 새 경력 노드 추가 등록"}</span>
                        </h3>
                        <button
                          type="button"
                          onClick={() => setActiveCareerFormItem(null)}
                          className="text-sm text-white/70 hover:text-white flex items-center bg-white/5 hover:bg-white/10 px-4 py-2 rounded-md transition-all cursor-pointer border border-white/5"
                        >
                          <X size={16} className="mr-1.5" />
                          편집 취소
                        </button>
                      </div>

                      {/* Period, Title, Role Row */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="space-y-2">
                          <label className="text-xs sm:text-sm font-semibold tracking-wide text-white/90">근속 및 활동 기간 (예: 2024 ~ 2026) *</label>
                          <input
                            required
                            type="text"
                            placeholder="예: 2024 ~ 2026"
                            value={activeCareerFormItem.period || ""}
                            onChange={(e) => setActiveCareerFormItem({ ...activeCareerFormItem, period: e.target.value })}
                            className="w-full bg-neutral-950 border border-white/15 focus:border-primary-red focus:bg-black outline-none px-4 py-3 text-sm sm:text-base text-white rounded-md transition-all font-medium placeholder:text-white/30"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="text-xs sm:text-sm font-semibold tracking-wide text-white/90">회사명 / 소속 브랜드 / 미디어명 *</label>
                          <input
                            required
                            type="text"
                            placeholder="예: 견인장치 및 오토모티브 미디어 (K트레일러)"
                            value={activeCareerFormItem.title || ""}
                            onChange={(e) => setActiveCareerFormItem({ ...activeCareerFormItem, title: e.target.value })}
                            className="w-full bg-neutral-950 border border-white/15 focus:border-primary-red focus:bg-black outline-none px-4 py-3 text-sm sm:text-base text-white rounded-md transition-all font-medium placeholder:text-white/30"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="text-xs sm:text-sm font-semibold tracking-wide text-white/90">직책 및 주요 담당 역할 *</label>
                          <input
                            required
                            type="text"
                            placeholder="예: 인하우스 영상기획총괄 PD"
                            value={activeCareerFormItem.role || ""}
                            onChange={(e) => setActiveCareerFormItem({ ...activeCareerFormItem, role: e.target.value })}
                            className="w-full bg-neutral-950 border border-white/15 focus:border-primary-red focus:bg-black outline-none px-4 py-3 text-sm sm:text-base text-white rounded-md transition-all font-medium placeholder:text-white/30"
                          />
                        </div>
                      </div>

                      {/* Description - Joined by newlines */}
                      <div className="space-y-2">
                        <label className="text-xs sm:text-sm font-semibold tracking-wide text-white/90">주요 담당 업무 & 기획 의도 (한 줄에 하나씩 입력)</label>
                        <textarea
                          rows={5}
                          placeholder="담당했던 주요 업무들을 한 줄에 한 문장씩 적어주세요.&#10;예:&#10;유튜브 및 이력 채널의 카라반 견인 전문 콘텐츠 기획 촬영 전담&#10;캠핑 아웃도어 트렌드 분석 및 로드마크 콘텐츠 개발"
                          value={activeCareerFormItem.description?.join("\n") || ""}
                          onChange={(e) => setActiveCareerFormItem({ 
                            ...activeCareerFormItem, 
                            description: e.target.value.split("\n").filter(Boolean) 
                          })}
                          className="w-full bg-neutral-950 border border-white/15 focus:border-primary-red focus:bg-black outline-none px-4 py-3 text-sm sm:text-base text-white rounded-md leading-relaxed resize-y font-sans font-medium placeholder:text-white/30"
                        />
                      </div>

                      {/* Achievements (Max 2 for simplicity) */}
                      <div className="space-y-6 pt-6 border-t border-white/15">
                        <h4 className="text-sm sm:text-base font-bold text-accent-orange font-display tracking-wider uppercase flex items-center">
                          <span className="p-1 px-2.5 bg-accent-orange/10 border border-accent-orange/30 rounded mr-2 text-xs">주요 데이터 성과</span>
                          주요 정량적 핵심 성과 (KPI) 설정
                        </h4>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          {/* Achievement 1 */}
                          <div className="bg-black/50 p-6 border border-white/10 rounded-xl space-y-4">
                            <h5 className="text-xs uppercase font-mono tracking-wider text-accent-orange font-bold border-b border-white/10 pb-2 flex items-center">
                              🎯 핵심 성과 부문 #1
                            </h5>
                            
                            <div className="space-y-2">
                              <label className="text-xs sm:text-sm font-semibold text-white/80 block">성과 분류/채널 (예: YouTube 콘텐츠 부문)</label>
                              <input
                                type="text"
                                placeholder="예: YouTube 콘텐츠 부문 (@k_trailer)"
                                value={activeCareerFormItem.achievements?.[0]?.platform || ""}
                                onChange={(e) => {
                                  const achs = [...(activeCareerFormItem.achievements || [])];
                                  if (!achs[0]) achs[0] = { platform: "", metrics: [] };
                                  achs[0].platform = e.target.value;
                                  setActiveCareerFormItem({ ...activeCareerFormItem, achievements: achs });
                                }}
                                className="w-full bg-neutral-950 border border-white/15 focus:border-primary-red focus:bg-black outline-none px-3.5 py-2.5 text-sm text-white rounded-md transition-all font-medium placeholder:text-white/30"
                              />
                            </div>

                            <div className="space-y-2">
                              <label className="text-xs sm:text-sm font-semibold text-white/80 block">수치 성과 내용 (한 줄에 하나씩 구체적 데이터 작성)</label>
                              <textarea
                                rows={4}
                                placeholder="예:&#10;운영 1년 만에 구독자 약 7,200명 돌파 (360% 성장)&#10;최고 누적 조회수 42만 회 돌파"
                                value={activeCareerFormItem.achievements?.[0]?.metrics?.join("\n") || ""}
                                onChange={(e) => {
                                  const achs = [...(activeCareerFormItem.achievements || [])];
                                  if (!achs[0]) achs[0] = { platform: "", metrics: [] };
                                  achs[0].metrics = e.target.value.split("\n").filter(Boolean);
                                  setActiveCareerFormItem({ ...activeCareerFormItem, achievements: achs });
                                }}
                                className="w-full bg-neutral-950 border border-white/15 focus:border-primary-red focus:bg-black outline-none px-3.5 py-2.5 text-sm text-white rounded-md font-sans leading-relaxed transition-all placeholder:text-white/30"
                              />
                            </div>

                            <div className="space-y-2">
                              <label className="text-xs sm:text-sm font-semibold text-white/80 block">실제 시청 바로가기 링크 URL</label>
                              <input
                                type="text"
                                placeholder="예: https://www.youtube.com/@k_trailer"
                                value={activeCareerFormItem.achievements?.[0]?.link || ""}
                                onChange={(e) => {
                                  const achs = [...(activeCareerFormItem.achievements || [])];
                                  if (!achs[0]) achs[0] = { platform: "", metrics: [] };
                                  achs[0].link = e.target.value;
                                  setActiveCareerFormItem({ ...activeCareerFormItem, achievements: achs });
                                }}
                                className="w-full bg-neutral-950 border border-white/15 focus:border-primary-red focus:bg-black outline-none px-3.5 py-2.5 text-sm text-white rounded-md font-mono transition-all placeholder:text-white/30"
                              />
                            </div>

                            <div className="space-y-2">
                              <label className="text-xs sm:text-sm font-semibold text-white/80 block">링크 라벨명</label>
                              <input
                                type="text"
                                placeholder="예: 유튜브 바로가기"
                                value={activeCareerFormItem.achievements?.[0]?.linkName || ""}
                                onChange={(e) => {
                                  const achs = [...(activeCareerFormItem.achievements || [])];
                                  if (!achs[0]) achs[0] = { platform: "", metrics: [] };
                                  achs[0].linkName = e.target.value;
                                  setActiveCareerFormItem({ ...activeCareerFormItem, achievements: achs });
                                }}
                                className="w-full bg-neutral-950 border border-white/15 focus:border-primary-red focus:bg-black outline-none px-3.5 py-2.5 text-sm text-white rounded-md transition-all font-medium placeholder:text-white/30"
                              />
                            </div>
                          </div>

                          {/* Achievement 2 */}
                          <div className="bg-black/50 p-6 border border-white/10 rounded-xl space-y-4">
                            <h5 className="text-xs uppercase font-mono tracking-wider text-accent-orange font-bold border-b border-white/10 pb-2 flex items-center">
                              🎯 핵심 성과 부문 #2
                            </h5>
                            
                            <div className="space-y-2">
                              <label className="text-xs sm:text-sm font-semibold text-white/80 block">성과 분류/채널 (예: Instagram 숏폼 채널)</label>
                              <input
                                type="text"
                                placeholder="예: Instagram 숏폼 채널 운영"
                                value={activeCareerFormItem.achievements?.[1]?.platform || ""}
                                onChange={(e) => {
                                  const achs = [...(activeCareerFormItem.achievements || [])];
                                  if (!achs[1]) achs[1] = { platform: "", metrics: [] };
                                  achs[1].platform = e.target.value;
                                  setActiveCareerFormItem({ ...activeCareerFormItem, achievements: achs });
                                }}
                                className="w-full bg-neutral-950 border border-white/15 focus:border-primary-red focus:bg-black outline-none px-3.5 py-2.5 text-sm text-white rounded-md transition-all font-medium placeholder:text-white/30"
                              />
                            </div>

                            <div className="space-y-2">
                              <label className="text-xs sm:text-sm font-semibold text-white/80 block">수치 성과 내용 (한 줄에 하나씩 구체적 데이터 작성)</label>
                              <textarea
                                rows={4}
                                placeholder="예:&#10;기초 120명 대 팔로워에서 단기간 내 1,300명으로 증가&#10;숏폼 콘텐츠 최고 누적 조회수 91만 회 달성"
                                value={activeCareerFormItem.achievements?.[1]?.metrics?.join("\n") || ""}
                                onChange={(e) => {
                                  const achs = [...(activeCareerFormItem.achievements || [])];
                                  if (!achs[1]) achs[1] = { platform: "", metrics: [] };
                                  achs[1].metrics = e.target.value.split("\n").filter(Boolean);
                                  setActiveCareerFormItem({ ...activeCareerFormItem, achievements: achs });
                                }}
                                className="w-full bg-neutral-950 border border-white/15 focus:border-primary-red focus:bg-black outline-none px-3.5 py-2.5 text-sm text-white rounded-md font-sans leading-relaxed transition-all placeholder:text-white/30"
                              />
                            </div>

                            <div className="space-y-2">
                              <label className="text-xs sm:text-sm font-semibold text-white/80 block">실제 시청 바로가기 링크 URL</label>
                              <input
                                type="text"
                                placeholder="예: https://www.instagram.com/..."
                                value={activeCareerFormItem.achievements?.[1]?.link || ""}
                                onChange={(e) => {
                                  const achs = [...(activeCareerFormItem.achievements || [])];
                                  if (!achs[1]) achs[1] = { platform: "", metrics: [] };
                                  achs[1].link = e.target.value;
                                  setActiveCareerFormItem({ ...activeCareerFormItem, achievements: achs });
                                }}
                                className="w-full bg-neutral-950 border border-white/15 focus:border-primary-red focus:bg-black outline-none px-3.5 py-2.5 text-sm text-white rounded-md font-mono transition-all placeholder:text-white/30"
                              />
                            </div>

                            <div className="space-y-2">
                              <label className="text-xs sm:text-sm font-semibold text-white/80 block">링크 라벨명</label>
                              <input
                                type="text"
                                placeholder="예: 인스타그램 바로가기"
                                value={activeCareerFormItem.achievements?.[1]?.linkName || ""}
                                onChange={(e) => {
                                  const achs = [...(activeCareerFormItem.achievements || [])];
                                  if (!achs[1]) achs[1] = { platform: "", metrics: [] };
                                  achs[1].linkName = e.target.value;
                                  setActiveCareerFormItem({ ...activeCareerFormItem, achievements: achs });
                                }}
                                className="w-full bg-neutral-950 border border-white/15 focus:border-primary-red focus:bg-black outline-none px-3.5 py-2.5 text-sm text-white rounded-md transition-all font-medium placeholder:text-white/30"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Save button */}
                      <button
                        type="submit"
                        className="w-full py-4 bg-primary-red hover:bg-rose-600 text-sm sm:text-base text-white font-extrabold tracking-widest flex items-center justify-center space-x-2 rounded-md transition-all cursor-pointer font-display uppercase shadow-lg hover:shadow-primary-red/10"
                      >
                        <Save size={18} />
                        <span>💼 경력 사항 변경 최종 검토 및 즉각 적용</span>
                      </button>
                    </form>
                  )}

                  {activeTab === "career" && !activeCareerFormItem && (
                    <div className="space-y-6 animate-fade-in font-sans">
                      {/* Career timeline master triggers */}
                      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-black/40 p-4 border border-white/5 rounded">
                        <div>
                          <span className="text-white font-bold text-xs flex items-center">
                            <Briefcase size={14} className="mr-1.5 text-primary-red" />
                            지능형 경력 타임라인 관리 제어판
                          </span>
                          <p className="text-[9px] text-white/40 mt-0.5">이메일, 유튜브 연결, 성과 지표 등을 실시간으로 편리하게 관리하세요.</p>
                        </div>

                        <div className="flex flex-wrap items-center gap-3">
                          <button
                            type="button"
                            onClick={handleAddNewCareerTrigger}
                            className="px-4 py-2 bg-primary-red hover:bg-neutral-900 text-[10px] tracking-widest font-display font-bold text-white hover:text-primary-red hover:border-primary-red border border-transparent rounded cursor-pointer flex items-center space-x-1"
                          >
                            <Plus size={12} />
                            <span>새 경력 노드 추가</span>
                          </button>

                          <button
                            type="button"
                            onClick={handleRestoreCareerDefaults}
                            className="px-3 py-2 bg-neutral-900 border border-white/10 text-white/60 hover:text-primary-red hover:border-primary-red rounded text-[10px] tracking-widest font-mono flex items-center space-x-1 cursor-pointer"
                          >
                            <RotateCcw size={11} />
                            <span>경력 디폴트 복구</span>
                          </button>
                        </div>
                      </div>

                      {/* List */}
                      <div className="border border-white/10 rounded overflow-hidden">
                        <div className="grid grid-cols-12 bg-black py-3 px-4 font-mono text-[9px] text-white/40 uppercase tracking-wider border-b border-white/5 font-bold">
                          <span className="col-span-3">PERIOD</span>
                          <span className="col-span-5">TITLE</span>
                          <span className="col-span-2">ROLE</span>
                          <span className="col-span-2 text-right">ACTION</span>
                        </div>

                        <div className="divide-y divide-white/5">
                          {careerItems.map((item) => (
                            <div key={item.id} className="grid grid-cols-12 py-3.5 px-4 text-xs font-sans items-center hover:bg-white/[0.01]">
                              <span className="col-span-3 font-mono font-bold text-white/70">
                                {item.period}
                              </span>
                              <span className="col-span-5 text-white font-bold truncate pr-3" title={item.title}>
                                {item.title}
                              </span>
                              <span className="col-span-2 text-white/60 truncate pr-2" title={item.role}>
                                {item.role}
                              </span>
                              <div className="col-span-2 flex items-center justify-end space-x-2">
                                <button
                                  type="button"
                                  onClick={() => setActiveCareerFormItem(item)}
                                  className="p-1 px-2.5 bg-zinc-900 border border-white/5 hover:border-primary-red/50 hover:bg-primary-red/10 text-white/60 hover:text-white text-[10px] tracking-wide rounded cursor-pointer transition-colors"
                                >
                                  수정
                                </button>
                                <button
                                  type="button"
                                  onClick={() => handleDeleteCareerItem(item.id, item.title)}
                                  className="p-1 hover:bg-primary-red/20 text-white/35 hover:text-primary-red rounded transition-colors cursor-pointer"
                                  title="삭제하기"
                                >
                                  <Trash2 size={13} />
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "skills" && activeSkillFormItem && (
                    <form onSubmit={handleSaveSkillCategory} className="space-y-8 bg-neutral-900/40 p-8 rounded-xl border border-white/10 shadow-xl font-sans animate-fade-in" id="skills-item-form">
                      {/* Header */}
                      <div className="flex items-center justify-between border-b border-white/10 pb-5 mb-6">
                        <h3 className="text-base sm:text-lg font-bold tracking-wider text-primary-red flex items-center font-display uppercase">
                          <Cpu size={18} className="mr-2.5" />
                          <span>{activeSkillFormIndex !== null ? "🛠️ 보유 전문 스킬 부문 수정" : "➕ 새 전문 스킬 레벨 등록"}</span>
                        </h3>
                        <button
                          type="button"
                          onClick={() => { setActiveSkillFormItem(null); setActiveSkillFormIndex(null); }}
                          className="text-sm text-white/70 hover:text-white flex items-center bg-white/5 hover:bg-white/10 px-4 py-2 rounded-md transition-all cursor-pointer border border-white/5"
                        >
                          <X size={16} className="mr-1.5" />
                          편집 취소
                        </button>
                      </div>

                      <div className="space-y-6">
                        <div className="space-y-2">
                          <label className="text-xs sm:text-sm font-semibold tracking-wide text-white/90 uppercase">스킬 대분류/카테고리명 (예: Automotive Production, Post-Production) *</label>
                          <input
                            required
                            type="text"
                            placeholder="예: Automotive Production"
                            value={activeSkillFormItem.category || ""}
                            onChange={(e) => setActiveSkillFormItem({ ...activeSkillFormItem, category: e.target.value })}
                            className="w-full bg-neutral-950 border border-white/15 focus:border-primary-red focus:bg-black outline-none px-4 py-3 text-sm sm:text-base text-white rounded-md transition-all font-medium placeholder:text-white/30"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="text-xs sm:text-sm font-semibold tracking-wide text-white/90 uppercase">
                            관련 보유 세부 핵심 기술 (한 줄에 대표 기술을 하나씩 입력)
                          </label>
                          <textarea
                            rows={6}
                            placeholder="예:&#10;Directing&#10;Cinematography (Cinema Rig)&#10;Drone Shooting (Mavic Pro / FPV)"
                            value={activeSkillFormItem.skills?.join("\n") || ""}
                            onChange={(e) => {
                              const list = e.target.value.split("\n").map(s => s.trim()).filter(s => s !== "");
                              setActiveSkillFormItem({ ...activeSkillFormItem, skills: list });
                            }}
                            className="w-full bg-neutral-950 border border-white/15 focus:border-primary-red focus:bg-black outline-none px-4 py-3 text-sm sm:text-base text-white rounded-md leading-relaxed resize-y font-mono font-medium placeholder:text-white/30"
                          />
                          <p className="text-xs text-white/40">※ 줄바꿈을 기점으로 세부 스킬 라벨 리스트가 자동으로 생성됩니다.</p>
                        </div>
                      </div>

                      {/* Save button */}
                      <button
                        type="submit"
                        className="w-full py-4 bg-primary-red hover:bg-rose-600 text-sm sm:text-base text-white font-extrabold tracking-widest flex items-center justify-center space-x-2 rounded-md transition-all cursor-pointer font-display uppercase shadow-lg hover:shadow-primary-red/10"
                      >
                        <Save size={18} />
                        <span>🛠️ 기술 부문 및 상세 역량 설정 최종 저장 및 적용</span>
                      </button>
                    </form>
                  )}

                  {activeTab === "skills" && !activeSkillFormItem && (
                    <div className="space-y-6 animate-fade-in font-sans">
                      {/* Skills triggers */}
                      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-black/40 p-4 border border-white/5 rounded">
                        <div>
                          <span className="text-white font-bold text-xs flex items-center">
                            <Cpu size={14} className="mr-1.5 text-primary-red" />
                            핵심 전문 보유 역량 제어판
                          </span>
                          <p className="text-[9px] text-white/40 mt-0.5">Automotive 동영상 제작의 모든 핵심 스킬을 카테고리별로 관리하세요.</p>
                        </div>

                        <div className="flex flex-wrap items-center gap-3">
                          <button
                            type="button"
                            onClick={handleAddNewSkillCategoryTrigger}
                            className="px-4 py-2 bg-primary-red hover:bg-neutral-900 text-[10px] tracking-widest font-display font-bold text-white hover:text-primary-red hover:border-primary-red border border-transparent rounded cursor-pointer flex items-center space-x-1"
                          >
                            <Plus size={12} />
                            <span>새 스킬 부문 추가</span>
                          </button>

                          <button
                            type="button"
                            onClick={handleRestoreSkillsDefaults}
                            className="px-3 py-2 bg-neutral-900 border border-white/10 text-white/60 hover:text-primary-red hover:border-primary-red rounded text-[10px] tracking-widest font-mono flex items-center space-x-1 cursor-pointer"
                          >
                            <RotateCcw size={11} />
                            <span>스킬 디폴트 복구</span>
                          </button>
                        </div>
                      </div>

                      {/* List */}
                      <div className="border border-white/10 rounded overflow-hidden">
                        <div className="grid grid-cols-12 bg-black py-3 px-4 font-mono text-[9px] text-white/40 uppercase tracking-wider border-b border-white/5 font-bold">
                          <span className="col-span-4">CATEGORY</span>
                          <span className="col-span-6">SKILLS DETAILS</span>
                          <span className="col-span-2 text-right">ACTION</span>
                        </div>

                        <div className="divide-y divide-white/5">
                          {skills.map((item, index) => (
                            <div key={index} className="grid grid-cols-12 py-3.5 px-4 text-xs font-sans items-center hover:bg-white/[0.01]">
                              <span className="col-span-4 text-white font-bold truncate pr-3" title={item.category}>
                                {item.category}
                              </span>
                              <span className="col-span-6 text-white/60 truncate pr-2" title={item.skills.join(", ")}>
                                {item.skills.join(", ")}
                              </span>
                              <div className="col-span-2 flex items-center justify-end space-x-2">
                                <button
                                  type="button"
                                  onClick={() => handleEditSkillCategoryTrigger(item, index)}
                                  className="p-1 px-2.5 bg-zinc-900 border border-white/5 hover:border-primary-red/50 hover:bg-primary-red/10 text-white/60 hover:text-white text-[10px] tracking-wide rounded cursor-pointer transition-colors"
                                >
                                  수정
                                </button>
                                <button
                                  type="button"
                                  onClick={() => handleDeleteSkillCategory(index, item.category)}
                                  className="p-1 hover:bg-primary-red/20 text-white/35 hover:text-primary-red rounded transition-colors cursor-pointer"
                                  title="삭제하기"
                                >
                                  <Trash2 size={13} />
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* submitted inquiries display drawer - an amazing premium touch */}
                  <SubmittedInquiriesDisplay />

                </div>
              )}

        </div>

      </div>
    </div>
  );
}

// In-panel drawer showing direct submitted inquiries in browser localStorage cache
function SubmittedInquiriesDisplay() {
  const [inquiries, setInquiries] = useState<any[]>([]);

  useEffect(() => {
    try {
      const list = JSON.parse(localStorage.getItem("contact_inquiries") || "[]");
      setInquiries(list);
    } catch (e) {
      setInquiries([]);
    }
  }, []);

  const handleClearInq = () => {
    if (confirm("모든 고객 수신 문의 접수 대장 기록을 가동 포트에서 영구 영구 삭제 삭제하시겠습니까?")) {
      try {
        localStorage.removeItem("contact_inquiries");
      } catch (e) {}
      setInquiries([]);
    }
  };

  if (inquiries.length === 0) return null;

  return (
    <div className="mt-12 bg-black/20 p-5 rounded border border-white/5 outline-dashed outline-1 outline-white/10" id="admin-inquiries-drawer">
      <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
        <h4 className="text-xs font-bold text-white tracking-widest font-display flex items-center uppercase text-accent-orange">
          <Grid size={13} className="mr-2" />
          <span>수신된 고객 프로젝트 문의 대장 ({inquiries.length}건)</span>
        </h4>
        <button
          onClick={handleClearInq}
          className="text-[9px] font-mono text-white/30 hover:text-primary-red cursor-pointer"
        >
          대장 전체 비우기
        </button>
      </div>

      <div className="space-y-3 max-h-[250px] overflow-y-auto">
        {inquiries.map((inq: any) => (
          <div key={inq.id} className="p-4 bg-cinema-card border border-white/5 rounded text-xs space-y-2">
            <div className="flex justify-between items-baseline border-b border-white/5 pb-1">
              <span className="font-bold text-white font-display">
                {inq.name}님 <span className="text-white/45 font-light text-[10px]">({inq.company || "개인 의뢰"})</span>
              </span>
              <span className="text-[9px] font-mono text-white/30">{inq.date}</span>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-[11px] font-mono text-white/60">
              <p>이메일: <span className="text-white">{inq.email}</span></p>
              <p>연락처: <span className="text-white">{inq.phone || "미지정"}</span></p>
              <p>프로필 포맷대: <span className="text-primary-red">{inq.projectType}</span></p>
              <p>제시 예산: <span className="text-accent-orange">{inq.budget || "협의"}</span></p>
            </div>

            <p className="text-[11px] text-white/80 leading-relaxed bg-black/40 p-2.5 rounded italic font-light">
              "{inq.message}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
