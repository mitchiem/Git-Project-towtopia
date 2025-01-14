import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

const Legal = () => {
  const navigate = useNavigate();

  const handleAccept = () => {
    localStorage.setItem('legal-agreement-accepted', 'true');
    toast({
      title: "Agreement Accepted",
      description: "Thank you for accepting our terms and conditions.",
    });
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold mb-4">Legal Notice and Privacy Policy</h1>
        <p className="text-gray-600 mb-8">Effective Date: January 13, 2025</p>
        
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Overview</h2>
            <p className="text-gray-700">
              This Legal Notice and Privacy Policy applies to all websites and marketing materials operated by RevenueMethods LLC. We are a marketing company that connects consumers with independent service providers.
            </p>
            
            <h2 className="text-2xl font-semibold">Company Role</h2>
            <p className="text-gray-700">
              RevenueMethods LLC is strictly a marketing and advertising company. We do not perform any services advertised on our platforms. Our sole function is connecting consumers with independent service providers through advertising and marketing.
            </p>
            
            <h2 className="text-2xl font-semibold">Service Provider Responsibility</h2>
            <p className="text-gray-700">
              All services are provided directly by independent service providers, not by RevenueMethods LLC. Service providers are solely responsible for:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Service quality and delivery</li>
              <li>Customer satisfaction</li>
              <li>Warranties and guarantees</li>
              <li>Insurance and licensing</li>
              <li>Compliance with all laws and regulations</li>
              <li>Resolution of any disputes</li>
              <li>Any damages or injuries</li>
              <li>All aspects of service provision</li>
            </ul>
            <p className="text-gray-700">
              Any contract for services is between the customer and the service provider. RevenueMethods LLC is not a party to any service agreements.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Privacy Practices</h2>
            <p className="text-gray-700">We collect basic information including:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Names and contact details</li>
              <li>Website usage data</li>
              <li>Service inquiries</li>
              <li>Marketing preferences</li>
            </ul>
            
            <p className="text-gray-700">This information is used to:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Connect users with service providers</li>
              <li>Improve our marketing</li>
              <li>Send relevant communications</li>
              <li>Analyze website performance</li>
            </ul>
            
            <p className="text-gray-700">We share information with:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Featured service providers</li>
              <li>Marketing partners</li>
              <li>Analytics providers</li>
              <li>Legal authorities when required</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Website Usage</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>We use cookies for website functionality and analytics</li>
              <li>Third-party links are not our responsibility</li>
              <li>Users may receive marketing communications</li>
              <li>Users can opt out of communications anytime</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Liability</h2>
            <p className="text-gray-700">RevenueMethods LLC is not liable for:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Service provider performance</li>
              <li>Quality of services</li>
              <li>Service-related damages</li>
              <li>Customer-provider disputes</li>
              <li>Service provider website content</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Changes</h2>
            <p className="text-gray-700">
              We may update this policy at any time. Changes will be posted with a new effective date.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Contact Information</h2>
            <p className="text-gray-700">
              RevenueMethods LLC<br />
              Email: revenuemethods@gmail.com<br />
              Phone: (678) 932-0975
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Governing Law</h2>
            <p className="text-gray-700">
              This policy is governed by Georgia law. All disputes are subject to Fulton County, Georgia courts' exclusive jurisdiction.
            </p>
          </section>

          <div className="border-t pt-6 mt-8">
            <p className="mb-6 text-sm text-gray-600">
              By clicking "Accept and Continue", you acknowledge that you have read and agree to our Legal Notice and Privacy Policy.
            </p>
            
            <Button onClick={handleAccept} className="w-full">
              Accept and Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legal;
