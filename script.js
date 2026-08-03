// DATA CV - SILAKAN EDIT DATA DI BAWAH INI JIKA ADA PERUBAHAN
const cvData = {
    personalInfo: {
        name: "NUR MUHAMMAD WAFA",
        location: "Purworejo, Indonesia",
        phone: "+62 813-2995-7959",
        email: "wafamuh529@gmail.com",
        linkedin: "linkedin.com/in/nmwafa",
        website: "maswafa.is-a.dev"
    },
    summary: "Cybersecurity Specialist with hands-on experience in Web Application Security, Network Security, and Infrastructure Hardening. Proficient in executing web application penetration testing using the OWASP Web Security Testing Guide (WSTG) methodology. Adept at identifying security vulnerabilities, conducting risk assessments, implementing secure coding practices, and authoring comprehensive technical security reports. Strong background in Linux administration, API security, and network architecture.",
    skills: [
        { category: "Penetration Testing Tools", details: "Burp Suite, Nmap, Wireshark, ZAP" },
        { category: "Security Standards & Frameworks", details: "OWASP Top 10, OWASP WSTG, System Hardening, Web Application Security, Infrastructure Security" },
        { category: "Operating Systems", details: "Linux Administration (Ubuntu, Red Hat), Windows" },
        { category: "Networking & Protocols", details: "TCP/IP, DNS, Firewalls, Network Monitoring" },
        { category: "Programming & Scripting", details: "Python, PHP, SQL, Bash Scripting" }
    ],
    experience: [
        {
            company: "Tech Hierarchy",
            role: "Web Application Security Specialist",
            location: "Remote",
            period: "March 2026 - April 2026",
            responsibilities: [
                "Executed comprehensive web application penetration testing on DVWA (Damn Vulnerable Web Application) test environments following OWASP methodologies.",
                "Discovered, analyzed, and validated web vulnerabilities including Injection flaws, Broken Authentication, and Security Misconfigurations.",
                "Authored detailed security assessment reports detailing findings, threat impacts, proof-of-concepts (PoC), and actionable remediation steps."
            ]
        },
        {
            company: "PT. Winnicode Garuda Indonesia",
            role: "Back-end Developer",
            location: "Remote",
            period: "February 2025 - June 2025",
            responsibilities: [
                "Engineered secure server-side application logic and integrated RESTful APIs for production systems.",
                "Refactored codebases to incorporate secure coding standards, successfully mitigating critical vulnerabilities such as Lack of Rate Limiting and Broken Access Control (BAC).",
                "Performed SQL query optimizations and backend system hardening to enhance application resilience and performance."
            ]
        },
        {
            company: "X-code (PT. Teknologi Server Indonesia)",
            role: "Web Pentester",
            location: "Remote",
            period: "November 2024 - January 2025",
            responsibilities: [
                "Conducted scheduled vulnerability assessments and web application penetration tests for enterprise clients based on OWASP standards.",
                "Identified security flaws, documented step-by-step exploit proof-of-concepts, and formulated technical remediation strategies for client engineering teams.",
                "Delivered formal security risk reports outlining executive summaries and granular remediation roadmaps."
            ]
        }
    ],
    education: [
        {
            institution: "Universitas Muhammadiyah Purworejo",
            degree: "Bachelor of Information Technology",
            location: "Purworejo, Indonesia",
            period: "2022 - 2026"
        },
        {
            institution: "Universitas Putra Bangsa",
            degree: "Computer Science Studies (Student Exchange Program)",
            location: "Kebumen, Indonesia",
            period: "2023 - 2024"
        }
    ],
    certifications: [
        "Google Cybersecurity Professional Certificate - Google",
        "Ethical Hacker - Cisco Networking Academy",
        "Linux System Administrator - Dicoding",
        "Introduction to Cybersecurity - Cisco Networking Academy",
        "Linux Unhatched - Cisco Networking Academy"
    ],
    projects: [
        {
            name: "Institutional Security Audits",
            description: "Volunteered in performing security vulnerability assessments and IT infrastructure audits across multiple educational institutions to enhance overall security posture."
        },
        {
            name: "Cybersecurity Research & Technical Writing",
            description: "Publishes technical articles on security, vulnerability analysis outlines, and personal notes on nmwafa.medium.com and maswafa.is-a.dev."
        }
    ]
};

function renderCV() {
    const container = document.getElementById('cv-content');
    
    let html = '';

    // Header Section
    html += `
        <div class="text-center mb-6 border-b-4 border-gray-800 pb-4">
            <h1 class="text-3xl md:text-4xl font-bold uppercase tracking-wide text-gray-900 mb-2">${cvData.personalInfo.name}</h1>
            <div class="text-[10px] sm:text-[11.5px] md:text-xs text-gray-700 flex flex-wrap justify-center items-center gap-1 sm:gap-2 w-full">
                <span>${cvData.personalInfo.location}</span> <span>&bull;</span>
                <span>${cvData.personalInfo.phone}</span> <span>&bull;</span>
                <a href="mailto:${cvData.personalInfo.email}" class="hover:underline">${cvData.personalInfo.email}</a> <span>&bull;</span>
                <a href="https://${cvData.personalInfo.linkedin}" target="_blank" class="hover:underline">${cvData.personalInfo.linkedin}</a> <span>&bull;</span>
                <a href="https://${cvData.personalInfo.website}" target="_blank" class="hover:underline">${cvData.personalInfo.website}</a>
            </div>
        </div>
    `;

    // Professional Summary
    html += `
        <div class="mb-5">
            <h2 class="text-lg font-bold border-b-2 border-gray-400 mb-2 uppercase text-gray-800 tracking-wider">Professional Summary</h2>
            <p class="text-sm md:text-base text-gray-800 text-justify leading-relaxed">${cvData.summary}</p>
        </div>
    `;

    // Core Competencies & Technical Skills
    html += `
        <div class="mb-5">
            <h2 class="text-lg font-bold border-b-2 border-gray-400 mb-2 uppercase text-gray-800 tracking-wider">Core Competencies & Technical Skills</h2>
            <ul class="text-sm md:text-base text-gray-800 space-y-1">
                ${cvData.skills.map(skill => `
                    <li><span class="font-semibold">${skill.category}:</span> ${skill.details}</li>
                `).join('')}
            </ul>
        </div>
    `;

    // Professional Experience
    html += `
        <div class="mb-5">
            <h2 class="text-lg font-bold border-b-2 border-gray-400 mb-2 uppercase text-gray-800 tracking-wider">Professional Experience</h2>
            <div class="space-y-4">
                ${cvData.experience.map(exp => `
                    <div>
                        <div class="flex flex-col md:flex-row justify-between mb-1">
                            <div class="font-bold text-gray-900">${exp.company} <span class="font-normal italic">| ${exp.location}</span></div>
                            <div class="font-semibold text-gray-700">${exp.period}</div>
                        </div>
                        <div class="font-semibold italic text-gray-800 mb-1">${exp.role}</div>
                        <ul class="list-disc list-inside text-sm md:text-base text-gray-800 space-y-1 pl-2">
                            ${exp.responsibilities.map(res => `<li>${res}</li>`).join('')}
                        </ul>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    // Education
    html += `
        <div class="mb-5">
            <h2 class="text-lg font-bold border-b-2 border-gray-400 mb-2 uppercase text-gray-800 tracking-wider">Education</h2>
            <div class="space-y-3">
                ${cvData.education.map(edu => `
                    <div class="flex flex-col md:flex-row justify-between">
                        <div>
                            <div class="font-bold text-gray-900">${edu.institution}</div>
                            <div class="italic text-gray-800">${edu.degree}</div>
                        </div>
                        <div class="md:text-right">
                            <div class="text-gray-900">${edu.location}</div>
                            <div class="font-semibold text-gray-700">${edu.period}</div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    // Certifications
    html += `
        <div class="mb-5">
            <h2 class="text-lg font-bold border-b-2 border-gray-400 mb-2 uppercase text-gray-800 tracking-wider">Certifications & Training</h2>
            <ul class="list-disc list-inside text-sm md:text-base text-gray-800 space-y-1 pl-2">
                ${cvData.certifications.map(cert => `<li>${cert}</li>`).join('')}
            </ul>
        </div>
    `;

    // Projects & Contributions
    html += `
        <div class="mb-5">
            <h2 class="text-lg font-bold border-b-2 border-gray-400 mb-2 uppercase text-gray-800 tracking-wider">Projects & Contributions</h2>
            <ul class="text-sm md:text-base text-gray-800 space-y-2">
                ${cvData.projects.map(proj => `
                    <li><span class="font-bold text-gray-900">${proj.name}:</span> ${proj.description}</li>
                `).join('')}
            </ul>
        </div>
    `;

    container.innerHTML = html;
}

// Jalankan fungsi render saat halaman dimuat
document.addEventListener('DOMContentLoaded', renderCV);

document.getElementById('download-btn').addEventListener('click', () => {
    const element = document.getElementById('cv-wrapper');
    const button = document.getElementById('download-btn');
    const originalText = button.innerHTML;
    
    // Ubah teks tombol saat memproses
    button.innerHTML = 'Generating PDF...';
    button.disabled = true;
    button.classList.add('opacity-70', 'cursor-not-allowed');

    const opt = {
        margin:       0, // Margin diset 0 karena padding sudah dikontrol oleh CSS di container
        filename:     'CV - Nur Muhammad Wafa.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, useCORS: true, windowWidth: 794 }, // windowWidth memaksa format desktop/A4 meski didownload via HP
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    // Generate PDF
    html2pdf().set(opt).from(element).save().then(() => {
        // Kembalikan tombol ke keadaan semula
        button.innerHTML = originalText;
        button.disabled = false;
        button.classList.remove('opacity-70', 'cursor-not-allowed');
    }).catch(err => {
        console.error("Error generating PDF:", err);
        button.innerHTML = 'Error! Try Again.';
        setTimeout(() => {
            button.innerHTML = originalText;
            button.disabled = false;
            button.classList.remove('opacity-70', 'cursor-not-allowed');
        }, 3000);
    });
});
