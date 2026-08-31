/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { X, ZoomIn } from "lucide-react";

interface ProofImageItem {
  title: string;
  caption: string;
  src: string;
}

interface CareerProofGalleryProps {
  proofImages?: ProofImageItem[];
}

export default function CareerProofGallery({ proofImages = [] }: CareerProofGalleryProps) {
  // Check image availability to avoid broken image cards
  const [availableImages, setAvailableImages] = useState<ProofImageItem[]>([]);
  const [selectedProof, setSelectedProof] = useState<ProofImageItem | null>(null);

  useEffect(() => {
    if (!proofImages || proofImages.length === 0) {
      setAvailableImages([]);
      return;
    }

    let isMounted = true;

    // Test load each image
    proofImages.forEach((item) => {
      const img = new Image();
      img.onload = () => {
        if (isMounted) {
          setAvailableImages((prev) => {
            if (prev.some((p) => p.src === item.src)) return prev;
            return [...prev, item];
          });
        }
      };
      img.onerror = () => {
        // Image does not exist, do not add
      };
      img.src = item.src;
    });

    return () => {
      isMounted = false;
    };
  }, [proofImages]);

  // If no proof images exist/load, don't render anything
  if (availableImages.length === 0) return null;

  return (
    <div className="pt-5 border-t border-white/[0.08]" id="career-proof-gallery">
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-[13px] font-bold text-[#8A8A93] flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
          <span>성과 실측 증빙 (애널리틱스 통계)</span>
        </h4>
        <span className="text-[13px] font-mono text-[#8A8A93]">CLICK TO ENLARGE</span>
      </div>

      {/* Proof Images Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        {availableImages.map((proof, pIdx) => (
          <div
            key={pIdx}
            id={`proof-image-card-${pIdx + 1}`}
            onClick={() => setSelectedProof(proof)}
            className="group relative bg-[#1A1A21] border border-white/[0.12] border-t-white/[0.16] hover:border-white/[0.25] rounded-xl overflow-hidden cursor-pointer transition-all duration-200"
          >
            {/* Image Preview Container */}
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-black/60">
              <img
                src={proof.src}
                alt={proof.title}
                className="w-full h-full object-cover brightness-90 group-hover:brightness-105 group-hover:scale-[1.03] transition-all duration-200"
              />
              
              {/* Hover Overlay with Zoom Icon */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-150 flex items-center justify-center gap-1.5 text-white text-[13px] font-bold">
                <ZoomIn size={16} className="text-white" />
                <span>통계 원본 확대보기</span>
              </div>
            </div>

            {/* Proof Card Caption */}
            <div className="p-3 bg-[#1A1A21] border-t border-white/[0.08]">
              <p className="text-[13px] font-bold text-white truncate group-hover:text-white transition-colors">
                {proof.title}
              </p>
              <p className="text-[13px] text-[#8A8A93] truncate mt-0.5 font-normal">
                {proof.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedProof && (
        <div
          id="proof-lightbox-overlay"
          onClick={() => setSelectedProof(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fade-in cursor-zoom-out"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-[#1A1A21] border border-white/[0.14] rounded-2xl overflow-hidden shadow-2xl cursor-default"
          >
            {/* Header */}
            <div className="px-5 py-3.5 border-b border-white/[0.08] flex items-center justify-between bg-[#202028]">
              <div>
                <h3 className="text-[14px] sm:text-base font-bold text-white">
                  {selectedProof.title}
                </h3>
                <p className="text-[13px] text-[#8A8A93] mt-0.5 font-normal">
                  {selectedProof.caption}
                </p>
              </div>
              <button
                onClick={() => setSelectedProof(null)}
                className="p-1.5 rounded-lg bg-[#1A1A21] hover:bg-[#2A2A34] border border-white/[0.1] text-white transition-colors cursor-pointer"
                title="닫기"
              >
                <X size={18} />
              </button>
            </div>

            {/* Expanded Proof Image */}
            <div className="p-3 bg-black flex items-center justify-center max-h-[75vh] overflow-auto">
              <img
                src={selectedProof.src}
                alt={selectedProof.title}
                className="max-h-[70vh] w-auto object-contain rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
