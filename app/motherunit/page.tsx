"use client";

import React, { useState } from "react";

type Form = {
    firstName: string;
    lastName: string;
    age: string;
    email: string;
    phone: string;
    county: string;
    constituency: string;
    ward: string;
    preferredBreed: string;
    facilitySize: string;
    totalBirds: string;
};

const BREEDS = [
    "Kienyeji (indigenous)",
    "Improved layers",
    "Broilers",
    "Dual purpose",
    // "Other",
];

export default function MotherUnitPage() {
    const [form, setForm] = useState<Form>({
        firstName: "",
        lastName: "",
        age: "",
        email: "",
        phone: "",
        county: "",
        constituency: "",
        ward: "",
        preferredBreed: "",
        facilitySize: "",
        totalBirds: "",
    });

    const [errors, setErrors] = useState<Partial<Record<keyof Form, string>>>({});
    const [submitting, setSubmitting] = useState(false);
    const [successMsg, setSuccessMsg] = useState<string | null>(null);

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        const { name, value } = e.target;
        setForm((s) => ({ ...s, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: undefined }));
    }

    function validate(): boolean {
        const err: Partial<Record<keyof Form, string>> = {};

        if (!form.firstName.trim()) err.firstName = "First name is required";
        if (!form.lastName.trim()) err.lastName = "Last name is required";

        const ageNum = Number(form.age);
        if (!form.age.trim() || Number.isNaN(ageNum) || ageNum <= 0) err.age = "Enter a valid age";

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) err.email = "Enter a valid email";

        if (!/^\+?\d{7,15}$/.test(form.phone)) err.phone = "Enter a valid phone number (digits only, include country code if possible)";

        if (!form.county.trim()) err.county = "County is required";
        if (!form.constituency.trim()) err.constituency = "Constituency is required";
        if (!form.ward.trim()) err.ward = "Ward is required";

        if (!form.preferredBreed) err.preferredBreed = "Please choose a preferred breed";

        if (!form.facilitySize.trim() || Number.isNaN(Number(form.facilitySize)) || Number(form.facilitySize) <= 0)
            err.facilitySize = "Enter facility size in square metres";

        if (!form.totalBirds.trim() || Number.isNaN(Number(form.totalBirds)) || Number(form.totalBirds) < 1)
            err.totalBirds = "Enter the total number of birds";

        setErrors(err);
        return Object.keys(err).length === 0;
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setSuccessMsg(null);

        if (!validate()) {
            window.scrollTo({ top: 0, behavior: "smooth" });
            return;
        }

        setSubmitting(true);

        try {
            // Example:
            // await fetch("/api/mother-units", { method: "POST", body: JSON.stringify(form), headers: { "Content-Type": "application/json" } });
            // console.log("form data",JSON.stringify(form),typeof(JSON.stringify(form)));
            // Simulate network call
            await new Promise((r) => setTimeout(r, 900));

            setSuccessMsg("Registration received! Our team will contact you shortly with next steps.");
            setForm({
                firstName: "",
                lastName: "",
                age: "",
                email: "",
                phone: "",
                county: "",
                constituency: "",
                ward: "",
                preferredBreed: "",
                facilitySize: "",
                totalBirds: "",
            });
            setErrors({});
            window.scrollTo({ top: 0, behavior: "smooth" });
        } catch (err) {
            console.error(err);
            setSuccessMsg("An error occurred while submitting. Please try again later.");
        } finally {
            setSubmitting(false);
        }
    }

    return (
        <div className="min-h-screen bg-white text-gray-900 mt-15 z-10">
            <header className="bg-black text-white">
                <div className="max-w-5xl mx-auto px-6 py-8 md:py-12">
                    <h1 className="text-2xl md:text-3xl font-extrabold text-yellow-400">Mother Unit Registration</h1>
                    <p className="mt-2 text-sm md:text-base text-gray-300 max-w-3xl">
                        Additional information about the program, costs and requirements can be obtained by filling the registration form below.
                    </p>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-6 md:px-0 py-8 md:py-12">
                {/* Success banner */}
                {successMsg && (
                    <div className="mb-6 rounded-lg p-4 border-2 border-green-200 bg-green-50 text-green-800">
                        {successMsg}
                    </div>
                )}
    {/*// flex flex-wrap items-center justify-between w-25 h-20*/}
    {/*            <div className="mb-20 flex flex-wrap justify-between px-20 bg-yellow-500  -mt-13  border-2 border-b-2 rounded-xl"></div>*/}
                <div className="mx-auto h-1 w-1/3 bg-black my-4 rounded" />

                <div className="mx-auto h-1 w-2/3 bg-red-600 my-4 rounded" />
                <div className="mx-auto h-1 w-1/2 bg-green-600 my-4 rounded" />

                <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg border border-green-50 p-6 md:p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-black">First Name</label>
                            <input
                                name="firstName"
                                value={form.firstName}
                                onChange={handleChange}
                                className={`placeholder:text-sm mt-1 w-full px-4 py-2 rounded-xl border ${errors.firstName ? "border-red-300" : "border-green-400"} focus:ring-2 focus:ring-yellow-300 outline-none`}
                                placeholder="Jane"
                                required
                            />
                            {errors.firstName && <p className="mt-1 text-xs text-red-600">{errors.firstName}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-black">Last Name</label>
                            <input
                                name="lastName"
                                value={form.lastName}
                                onChange={handleChange}
                                className={`placeholder:text-sm mt-1 w-full px-4 py-2 rounded-xl border ${errors.lastName ? "border-red-300" : "border-green-400"} focus:ring-2 focus:ring-yellow-300 outline-none`}
                                placeholder="Doe"
                                required
                            />
                            {errors.lastName && <p className="mt-1 text-xs text-red-600">{errors.lastName}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-black">Age</label>
                            <input
                                name="age"
                                value={form.age}
                                onChange={handleChange}
                                inputMode="numeric"
                                className={`placeholder:text-sm mt-1 w-full px-4 py-2 rounded-xl border ${errors.age ? "border-red-300" : "border-green-400"} focus:ring-2 focus:ring-yellow-300 outline-none`}
                                placeholder="e.g. 35"
                                required
                            />
                            {errors.age && <p className="mt-1 text-xs text-red-600">{errors.age}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-black">Email</label>
                            <input
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                type="email"
                                className={`placeholder:text-sm mt-1 w-full px-4 py-2 rounded-xl border ${errors.email ? "border-red-300" : "border-green-400"} focus:ring-2 focus:ring-yellow-300 outline-none`}
                                placeholder="name@domain.com"
                                required
                            />
                            {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-black">Phone</label>
                            <input
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                inputMode="tel"
                                className={`placeholder:text-sm mt-1 w-full px-4 py-2 rounded-xl border ${errors.phone ? "border-red-300" : "border-green-400"} focus:ring-2 focus:ring-yellow-300 outline-none`}
                                placeholder="+2547XXXXXXXX"
                                required
                            />
                            {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
                        </div>
                    </div>

                    <hr className="my-6 border-green-100" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-black">County</label>
                            <input
                                name="county"
                                value={form.county}
                                onChange={handleChange}
                                className={`placeholder:text-sm mt-1 w-full px-4 py-2 rounded-xl border ${errors.county ? "border-red-300" : "border-green-400"} focus:ring-2 focus:ring-yellow-300 outline-none`}
                                placeholder="e.g. Kiambu"
                                required
                            />
                            {errors.county && <p className="mt-1 text-xs text-red-600">{errors.county}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-black">Constituency</label>
                            <input
                                name="constituency"
                                value={form.constituency}
                                onChange={handleChange}
                                className={`placeholder:text-sm mt-1 w-full px-4 py-2 rounded-xl border ${errors.constituency ? "border-red-300" : "border-green-400"} focus:ring-2 focus:ring-yellow-300 outline-none`}
                                placeholder="e.g. Gatundu South"
                                required
                            />
                            {errors.constituency && <p className="mt-1 text-xs text-red-600">{errors.constituency}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-black">Ward</label>
                            <input
                                name="ward"
                                value={form.ward}
                                onChange={handleChange}
                                className={`placeholder:text-sm mt-1 w-full px-4 py-2 rounded-xl border ${errors.ward ? "border-red-300" : "border-green-400"} focus:ring-2 focus:ring-yellow-300 outline-none`}
                                placeholder="e.g. Kamwangi"
                                required
                            />
                            {errors.ward && <p className="mt-1 text-xs text-red-600">{errors.ward}</p>}
                        </div>
                    </div>

                    <hr className="my-6 border-green-100" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
                        <div>
                            <label className="block text-sm font-medium text-black">Preferred Breed</label>
                            <select
                                name="preferredBreed"
                                value={form.preferredBreed}
                                onChange={handleChange}
                                className={`placeholder:text-sm text-sm mt-1 w-full px-4 py-2 rounded-xl border ${errors.preferredBreed ? "border-red-300" : "border-green-400"} focus:ring-2 focus:ring-yellow-300 outline-none bg-white`}
                            >
                                <option className="text-sm" value="">Please choose</option>
                                {BREEDS.map((b) => (
                                    <option key={b} value={b}>
                                        {b}
                                    </option>
                                ))}
                            </select>
                            {errors.preferredBreed && <p className="mt-1 text-xs text-red-600">{errors.preferredBreed}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-black">Facility Size (m²)</label>
                            <input
                                name="facilitySize"
                                value={form.facilitySize}
                                onChange={handleChange}
                                inputMode="numeric"
                                className={`placeholder:text-sm mt-1 w-full px-4 py-2 rounded-xl border ${errors.facilitySize ? "border-red-300" : "border-green-400"} focus:ring-2 focus:ring-yellow-300 outline-none`}
                                placeholder="e.g. 120"
                                required
                            />
                            {errors.facilitySize && <p className="mt-1 text-xs text-red-600">{errors.facilitySize}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-black">Total Number of Birds</label>
                            <input
                                name="totalBirds"
                                value={form.totalBirds}
                                onChange={handleChange}
                                inputMode="numeric"
                                className={`placeholder:text-sm mt-1 w-full px-4 py-2 rounded-xl border ${errors.totalBirds ? "border-red-300" : "border-green-400"} focus:ring-2 focus:ring-yellow-300 outline-none`}
                                placeholder="e.g. 200"
                                required
                            />
                            {errors.totalBirds && <p className="mt-1 text-xs text-red-600">{errors.totalBirds}</p>}
                        </div>
                    </div>

                    <div className="mt-6 flex items-center gap-4">
                        <button
                            type="submit"
                            disabled={submitting}
                            className="placeholder:text-sm px-6 py-3 rounded-full bg-yellow-500 text-black font-semibold text-sm hover:bg-yellow-600 transition disabled:opacity-60"
                        >
                            {submitting ? "Submitting…" : "Submit Registration"}
                        </button>

                        <button
                            type="button"
                            onClick={() => {
                                setForm({
                                    firstName: "",
                                    lastName: "",
                                    age: "",
                                    email: "",
                                    phone: "",
                                    county: "",
                                    constituency: "",
                                    ward: "",
                                    preferredBreed: "",
                                    facilitySize: "",
                                    totalBirds: "",
                                });
                                setErrors({});
                            }}
                            className="px-4 py-3 rounded-full bg-white border border-green-500 text-green-800 text-sm hover:bg-gray-50 transition"
                        >
                            Reset
                        </button>
                    </div>

                    <p className="mt-4 text-sm text-gray-600">
                        By submitting you agree to be contacted by USOMI about your registration and the Mother Unit program.
                    </p>
                </form>
            </main>
        </div>
    );
}
