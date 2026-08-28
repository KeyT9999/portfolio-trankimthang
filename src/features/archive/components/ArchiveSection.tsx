import { Container } from "@/components/ui";
import { educationData, awardsData, certificationsData } from "@/content";

export function ArchiveSection() {
  const award = awardsData[0];

  return (
    <section
      id="archive"
      data-credentials-section
      className="relative border-b-2 border-rule bg-paper py-12 sm:py-16 lg:py-20 overflow-hidden"
    >
      <Container>
        {/* ==========================================================================
            TRANSITION FROM CAPABILITIES:
            Evidence Index (WHAT I CAN DO) → Formal Credentials (WHAT SUPPORTS THIS)
            ========================================================================== */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-rule-light pb-3">
          <div className="flex items-center gap-2.5">
            <span className="inline-block h-2.5 w-2.5 bg-accent-red" />
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-accent-red">
              CREDENTIALS / 04
            </span>
            <span className="font-mono text-xs text-ink-muted">
              • HỒ SƠ HỌC THUẬT & CHỨNG THỰC NĂNG LỰC
            </span>
          </div>

          <div className="flex items-center gap-3 font-mono text-xs text-ink-muted">
            <span>HỒ SƠ: HV-001 · GN-001 · CN-001 · CN-002</span>
          </div>
        </div>

        {/* Section Header */}
        <div className="mt-6 sm:mt-8 max-w-4xl">
          <h2 className="font-[family-name:var(--font-sans-display)] text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-ink leading-[0.95]">
            FORMAL CREDENTIALS & RECOGNITION
          </h2>
          <p className="mt-2 font-mono text-xs sm:text-sm text-ink-soft uppercase tracking-wider">
            Hồ sơ đào tạo chính quy, thành tích thi đấu công nghệ và chứng chỉ chuyên môn liên tục.
          </p>
        </div>

        {/* ==========================================================================
            ASYMMETRIC 12-COLUMN RECORD COMPOSITION
            Left 7 Cols: Education (HV-001, 100% Weight)
            Right 5 Cols: Recognition (GN-001, 75%) + Certifications (CN-001/002, 60%)
            ========================================================================== */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* ========================================================================
              LEFT 7 COLUMNS: EDUCATION RECORD (HV-001) - PRIMARY RECORD
              ======================================================================== */}
          <div className="lg:col-span-7 space-y-6">
            <div className="border-2 border-rule bg-paper-warm p-6 sm:p-8 shadow-lg">
              {/* Record Header */}
              <div className="flex items-center justify-between border-b border-rule pb-3">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 bg-accent-red" />
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent-red">
                    HỌC VẤN CHÍNH QUY
                  </span>
                </div>
                <span className="border border-rule bg-ink px-2 py-0.5 font-mono text-xs font-bold text-paper">
                  {educationData.docketId}
                </span>
              </div>

              {/* Institution & Major */}
              <div className="mt-5">
                <h3 className="font-[family-name:var(--font-sans-display)] text-2xl sm:text-4xl font-black uppercase text-ink leading-tight">
                  {educationData.institution}
                </h3>
                <p className="mt-1.5 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-accent-red">
                  {educationData.major}
                </p>
                <p className="mt-1 font-mono text-xs text-ink-muted">
                  Niên khóa: {educationData.period.display} • Tình trạng: {educationData.status}
                </p>
              </div>

              {/* Coursework Scope */}
              <p className="mt-4 font-body text-xs sm:text-sm leading-relaxed text-ink-soft border-t border-rule-light pt-4">
                {educationData.description}
              </p>

              {/* GPA Metric Box */}
              <div className="mt-6 border border-rule bg-paper p-4 flex flex-wrap items-baseline justify-between gap-3">
                <div>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-ink-muted">
                    CHỈ SỐ HỌC TẬP TÍCH LŨY (GPA)
                  </span>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="font-[family-name:var(--font-sans-display)] text-3xl sm:text-4xl font-black text-ink">
                      {educationData.gpa.score}
                    </span>
                    <span className="font-mono text-xs text-ink-muted">
                      / {educationData.gpa.scale} (Thang điểm 4.0)
                    </span>
                  </div>
                </div>
                <span className="border border-emerald-500/40 bg-emerald-500/10 px-2 py-1 font-mono text-xs font-bold text-emerald-700">
                  ĐANG THEO HỌC
                </span>
              </div>
            </div>
          </div>

          {/* ========================================================================
              RIGHT 5 COLUMNS: RECOGNITION (GN-001) & CERTIFICATIONS (CN-001/002)
              ======================================================================== */}
          <div className="lg:col-span-5 space-y-6">
            {/* Recognition Block (GN-001) */}
            {award && (
              <div className="border border-rule bg-paper p-5 sm:p-6 space-y-3">
                <div className="flex items-center justify-between border-b border-rule-light pb-2.5">
                  <span className="font-mono text-[11px] font-bold uppercase text-accent-red">
                    GHI NHẬN & THÀNH TÍCH
                  </span>
                  <span className="border border-rule-light bg-paper-warm px-1.5 py-0.5 font-mono text-[10px] font-bold text-ink">
                    {award.docketId}
                  </span>
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <span className="border border-accent-red bg-accent-red px-2.5 py-0.5 font-mono text-xs font-bold uppercase tracking-widest text-paper">
                    {award.result}
                  </span>
                  <span className="font-mono text-xs text-ink-muted">[{award.year}]</span>
                </div>

                <h4 className="font-[family-name:var(--font-sans-display)] text-lg sm:text-xl font-bold uppercase text-ink leading-snug">
                  {award.competition}
                </h4>

                <p className="font-mono text-xs text-ink-muted">
                  Đơn vị tổ chức: {award.organizer}
                </p>

                <p className="font-body text-xs leading-relaxed text-ink-soft pt-1">
                  {award.summary}
                </p>
              </div>
            )}

            {/* Certifications Block (CN-001 / CN-002) */}
            <div className="border border-rule bg-paper-warm p-5 sm:p-6 space-y-3">
              <div className="flex items-center justify-between border-b border-rule-light pb-2.5">
                <span className="font-mono text-[11px] font-bold uppercase text-ink">
                  CHỨNG NHẬN CHUYÊN MÔN
                </span>
                <span className="font-mono text-[10px] text-ink-muted">2025</span>
              </div>

              <div className="divide-y divide-rule-light">
                {certificationsData.map((cert) => (
                  <div key={cert.docketId} className="py-3 first:pt-1 last:pb-0 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="border border-rule bg-ink px-1.5 py-0.2 font-mono text-[10px] font-bold text-paper">
                        {cert.docketId}
                      </span>
                      <span className="font-mono text-[10px] text-ink-muted uppercase">
                        {cert.category}
                      </span>
                    </div>
                    <h5 className="font-[family-name:var(--font-sans-display)] text-xs sm:text-sm font-bold uppercase text-ink leading-snug">
                      {cert.title}
                    </h5>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
