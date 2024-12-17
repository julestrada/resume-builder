'use client';
import React from 'react';

export default function ResumeBuilder() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-center">Resume Builder</h1>
        <div className="grid gap-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Personal Information</h2>
            {/* Personal info form will go here */}
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Job Description</h2>
            {/* Job description input will go here */}
          </section>
        </div>
      </div>
    </main>
  );
} 