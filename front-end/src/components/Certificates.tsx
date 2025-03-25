"use client";
import React from "react";

interface Certificate {
  id: string;
  title: string;
  link: string;
}

interface CertificatesProps {
  certificates: Certificate[];
}

export default function Certificates({ certificates }: CertificatesProps) {
  return (
    <div className="mb-6">
      <h2 className="text-3xl font-bold mb-2">Certificates</h2>
      <ul className="space-y-4">
        {certificates.map((cert) => (
          <li key={cert.id}>
            <p className="font-bold">{cert.title}</p>
            <ul className="list-disc pl-6">
              <li className="break-all">
                <a href={cert.link} className="text-blue-800 hover:underline" target="_blank" rel="noopener noreferrer">
                  {cert.link}
                </a>
              </li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
