/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Mail, Phone, Youtube, Instagram, Send, CheckCircle, FileText, Landmark, User, DollarSign } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    budget: "",
    projectType: "BRAND FILM",
    message: ""
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("이름, 이메일, 의뢰 내용을 전부 입력해 주세요.");
      return;
    }

    setIsLoading(true);

    // Simulate sending mail securely / saving locally
    setTimeout(() => {
      try {
        // Save query to localStorage so they can see submitted inquiries as well (useful feature for portfolio review)
        const existingInquiries = JSON.parse(localStorage.getItem("contact_inquiries") || "[]");
        const newInquiry = {
          ...formData,
          id: "inq-" + Date.now(),
          date: new Date().toLocaleDateString("ko-KR")
        };
        localStorage.setItem("contact_inquiries", JSON.stringify([newInquiry, ...existingInquiries]));
      } catch (e) {
        // Safe fall-through if private tab or sandbox disables storage
      }

      setIsLoading(false);
      setIsSuccess(true);
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        budget: "",
        projectType: "BRAND FILM",
        message: ""
      });

      // Reset success state after a few seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-cinema-gray relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16 md:flex-row md:items-end justify-between">
          <div>
            <span className="text-sm tracking-[0.4em] text-primary-red font-bold block mb-2 font-display">
              06 / 비즈니스 제안 및 문의
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tight text-slate-900">
              프로젝트 제안 <span className="font-light italic text-slate-500">CONTACT</span>
            </h2>
          </div>
          <div className="h-[2px] bg-slate-200 flex-grow mx-8 hidden md:block mb-3" />
          <p className="text-slate-400 text-xs md:text-sm font-mono mt-4 md:mt-0 tracking-widest">
            온라인 문의 접수 양식
          </p>
        </div>

        {/* Layout Split: Left details, Right Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Block: Direct Channels Info */}
          <div className="lg:col-span-4 space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <span className="text-xs tracking-[0.35em] text-primary-red font-bold font-display uppercase">
                상시 소통 연락처
              </span>
              <h3 className="text-2xl font-bold tracking-tight text-slate-900 font-display">
                상상을 영상으로 구현할<br />준비가 되셨나요?
              </h3>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-light">
                자동차 시승기, 로드카라반 결합 테스트, 아웃도어 광고 캠페인 등 기획 초기 시나리오 브레인스토밍부터 고해상도 시네마 마케팅 마스터클래스까지 무료 파트너 상담을 지원합니다.
              </p>
            </div>

            {/* Quick Informative Info list cards */}
            <div className="space-y-4">
              
              {/* Mail Box */}
              <a
                href="mailto:myjuwon4@naver.com"
                className="flex items-center p-4 bg-cinema-card border border-slate-200 hover:border-primary-red/50 hover:shadow-md rounded transition-all duration-300 group"
              >
                <div className="p-3 bg-slate-50 border border-slate-200 group-hover:border-primary-red/40 rounded mr-4">
                  <Mail fill="none" className="text-primary-red" size={16} />
                </div>
                <div>
                  <p className="text-[9px] font-mono text-slate-500 tracking-wider">이메일 주소</p>
                  <p className="text-xs md:text-sm text-slate-800 group-hover:text-primary-red font-semibold transition-colors">
                    myjuwon4@naver.com
                  </p>
                </div>
              </a>

              {/* YouTube Link */}
              <a
                href="https://www.youtube.com/@k_trailer"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-cinema-card border border-slate-200 hover:border-primary-red/50 hover:shadow-md rounded transition-all duration-300 group"
              >
                <div className="p-3 bg-slate-50 border border-slate-200 group-hover:border-primary-red/40 rounded mr-4">
                  <Youtube className="text-primary-red" size={16} />
                </div>
                <div>
                  <p className="text-[9px] font-mono text-slate-500 tracking-wider">공식 유튜브 채널</p>
                  <p className="text-xs md:text-sm text-slate-800 group-hover:text-primary-red transition-colors">
                    K-TRAILER 유튜브 보기
                  </p>
                </div>
              </a>

              {/* Instagram Link */}
              <a
                href="https://www.instagram.com/ktrailer1/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-cinema-card border border-slate-200 hover:border-primary-red/50 hover:shadow-md rounded transition-all duration-300 group"
              >
                <div className="p-3 bg-slate-50 border border-slate-200 group-hover:border-primary-red/40 rounded mr-4">
                  <Instagram className="text-primary-red" size={16} />
                </div>
                <div>
                  <p className="text-[9px] font-mono text-slate-500 tracking-wider">인스타그램 프로필</p>
                  <p className="text-xs md:text-sm text-slate-800 group-hover:text-primary-red transition-colors">
                    @ktrailer1 팔로우
                  </p>
                </div>
              </a>

            </div>

            {/* Quick legal copyright disclaimer */}
            <p className="text-xs font-mono text-slate-400 hidden lg:block uppercase tracking-wider">
              이주원 PD 포트폴리오
            </p>
          </div>

          {/* Right Block: Project Enquiry Form Card */}
          <div className="lg:col-span-8 bg-cinema-card border border-slate-200/80 p-6 md:p-10 rounded shadow-lg shadow-slate-100 relative overflow-hidden" id="contact-form-container">
            
            {/* Success Check overlay window */}
            {isSuccess && (
              <div className="absolute inset-0 z-30 bg-white/98 backdrop-blur-md flex flex-col items-center justify-center text-center p-6 animate-fade-in" id="contact-success-screen">
                <CheckCircle size={48} className="text-primary-red mb-4 animate-scale-up" />
                <h3 className="text-lg md:text-xl font-bold tracking-tight text-slate-900 mb-2 font-display">
                  의뢰서가 성공적으로 접수되었습니다.
                </h3>
                <p className="text-xs text-slate-600 max-w-sm leading-relaxed mb-6 font-light">
                  비디오 디렉터 이주원 PD가 작성해주신 세부 사항을 엄격히 검토한 후, 기재해주신 이메일 주소로 24시간 내 전문 컨설팅 답신을 발송하겠습니다.
                </p>
                <button
                  id="success-close-btn"
                  onClick={() => setIsSuccess(false)}
                  className="px-6 py-2.5 bg-slate-100 border border-slate-200 text-xs text-slate-800 hover:border-primary-red hover:bg-slate-200 transition-all rounded tracking-wider cursor-pointer font-display"
                >
                  새 프로젝트 제안하기
                </button>
              </div>
            )}

            <span className="text-xs tracking-[0.35em] text-slate-400 font-bold block mb-6 uppercase font-display">
              프로젝트 기본 정보 입력
            </span>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Row 1: Name & Brand */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Client Name Input */}
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-xs tracking-widest font-mono text-slate-700 uppercase font-bold">
                    성함/담당자명 *
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pr-3 pointer-events-none text-slate-400">
                      <User size={12} />
                    </span>
                    <input
                      required
                      type="text"
                      id="contact-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="홍길동 디렉터"
                      className="w-full bg-slate-50 hover:bg-slate-50 focus:bg-white border border-slate-200 focus:border-primary-red outline-none px-4 py-3 pl-8 text-xs text-slate-800 rounded transition-colors"
                    />
                  </div>
                </div>

                {/* Company Client Input */}
                <div className="space-y-2">
                  <label htmlFor="company" className="block text-xs tracking-widest font-mono text-slate-700 uppercase font-bold">
                    회사/브랜드명
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pr-3 pointer-events-none text-slate-400">
                      <Landmark size={12} />
                    </span>
                    <input
                      type="text"
                      id="contact-company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="(주) 오토캠핑 네트웍스"
                      className="w-full bg-slate-50 hover:bg-slate-50 focus:bg-white border border-slate-200 focus:border-primary-red outline-none px-4 py-3 pl-8 text-xs text-slate-800 rounded transition-colors"
                    />
                  </div>
                </div>

              </div>

              {/* Row 2: Email & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Client Email input */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-xs tracking-widest font-mono text-slate-700 uppercase font-bold">
                    연락 가능한 이메일 *
                  </label>
                  <input
                    required
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@brand.com"
                    className="w-full bg-slate-50 hover:bg-slate-50 focus:bg-white border border-slate-200 focus:border-primary-red outline-none px-4 py-3 text-xs text-slate-800 rounded transition-colors"
                  />
                </div>

                {/* Client Phone input */}
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-xs tracking-widest font-mono text-slate-700 uppercase font-bold">
                    전화번호
                  </label>
                  <input
                    type="tel"
                    id="contact-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="010-1234-5678"
                    className="w-full bg-slate-50 hover:bg-slate-50 focus:bg-white border border-slate-200 focus:border-primary-red outline-none px-4 py-3 text-xs text-slate-800 rounded transition-colors"
                  />
                </div>

              </div>

              {/* Row 3: Estimated Budget & Project Format Selector */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Format selection */}
                <div className="space-y-2">
                  <label htmlFor="projectType" className="block text-xs tracking-widest font-mono text-slate-700 uppercase font-bold">
                    제작 포맷 대분류
                  </label>
                  <select
                    id="contact-type"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full bg-slate-50 hover:bg-slate-50 focus:bg-white border border-slate-200 focus:border-primary-red outline-none px-4 py-3 text-xs text-slate-800 rounded cursor-pointer transition-colors"
                  >
                    <option value="BRAND FILM">시네마 브랜드 필름 (BRAND FILM)</option>
                    <option value="YOUTUBE CONTENT">유튜브 채널 콘텐츠 위탁 (YOUTUBE)</option>
                    <option value="COMMERCIAL">상업 제품 광고 (COMMERCIAL)</option>
                    <option value="PRODUCT REVIEW">차량/캠핑기어 정밀 리뷰 (REVIEW)</option>
                    <option value="SHORTS">스마트 쇼츠 / 릴스 통합 제작 (SHORTS)</option>
                    <option value="INTERVIEW">다큐 대화식 구성 (INTERVIEW)</option>
                  </select>
                </div>

                {/* Client Budget choice */}
                <div className="space-y-2">
                  <label htmlFor="budget" className="block text-xs tracking-widest font-mono text-slate-700 uppercase font-bold">
                    대략적인 가용 예산 범위
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pr-3 pointer-events-none text-slate-450">
                      <DollarSign size={12} />
                    </span>
                    <input
                      type="text"
                      id="contact-budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      placeholder="협의 가능 (예: 500만 원 내외)"
                      className="w-full bg-slate-50 hover:bg-slate-50 focus:bg-white border border-slate-200 focus:border-primary-red outline-none px-4 py-3 pl-8 text-xs text-slate-800 rounded transition-colors"
                    />
                  </div>
                </div>

              </div>

              {/* Message Details Box */}
              <div className="space-y-2">
                <label htmlFor="message" className="block text-xs tracking-widest font-mono text-slate-700 uppercase font-bold">
                  의뢰/제작 세부 세부 개요 요지 *
                </label>
                <div className="relative">
                  <span className="absolute top-3 left-3 flex pointer-events-none text-slate-400">
                    <FileText size={12} />
                  </span>
                  <textarea
                    required
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="제작하려는 핵심 차종/캠핑 기어 정보, 목표 채널 업로드 주기, 선호하시는 타겟 레퍼런스 채널 등을 기재해주시면 더 정확하고 가치 있는 컨설팅으로 보답하겠습니다."
                    className="w-full bg-slate-50 hover:bg-slate-50 focus:bg-white border border-slate-200 focus:border-primary-red outline-none px-4 py-3 pl-8 text-xs text-slate-800 rounded transition-colors resize-y leading-relaxed"
                  />
                </div>
              </div>

              {/* Submission Button */}
              <button
                id="contact-submit-btn"
                disabled={isLoading}
                type="submit"
                className={`w-full py-4 text-xs font-display tracking-[0.25em] font-bold uppercase border hover:scale-[1.01] transition-all duration-300 rounded cursor-pointer flex items-center justify-center space-x-2 ${
                  isLoading
                    ? "bg-slate-100 border-slate-200 text-slate-400 cursor-not-allowed"
                    : "bg-primary-red hover:bg-primary-red/90 text-white border-primary-red shadow-lg shadow-primary-red/10 hover:shadow-primary-red/30"
                }`}
              >
                {isLoading ? (
                  <span className="inline-block h-3.5 w-3.5 animate-spin rounded-full border-2 border-white/20 border-t-white" />
                ) : (
                  <>
                    <Send size={12} />
                    <span>프로젝트 컨설팅 시작하기</span>
                  </>
                )}
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}
