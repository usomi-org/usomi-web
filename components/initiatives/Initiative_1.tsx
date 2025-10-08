'use client';

import {Button_1} from "@/components/buttons/Button_1"

export default function Initiatives() {
    return (
        <section id="initiatives" className="max-w-6xl mx-auto px-6 md:px-12 py-14">
            <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="md:flex md:items-center md:justify-between">
                    <div>
                        <h2 className="text-3xl font-bold mb-2 text-green-900">Initiatives that help farmers thrive</h2>
                        <p className="text-gray-600 max-w-2xl">Small interventions. Big impact — from data-driven growing to market linkage and finance.</p>
                    </div>
                    <div className="mt-6 md:mt-0">
                        <Button_1 href="#contact" variant="primary">Work with us</Button_1>
                    </div>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    <div className="p-6 rounded-lg border border-gray-100">
                        <h4 className="font-semibold text-lg text-green-900">Advisory</h4>
                        <p className="text-sm text-gray-600 mt-2">Localised agronomy recommendations delivered to farmers.</p>
                    </div>
                    <div className="p-6 rounded-lg border border-gray-100">
                        <h4 className="font-semibold text-lg text-green-900">Market Linkage</h4>
                        <p className="text-sm text-gray-600 mt-2">Direct connections to buyers and aggregators.</p>
                    </div>
                    <div className="p-6 rounded-lg border border-gray-100">
                        <h4 className="font-semibold text-lg text-green-900">Inputs & Tech</h4>
                        <p className="text-sm text-gray-600 mt-2">Affordable precision tools and training.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}