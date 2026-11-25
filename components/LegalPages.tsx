import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

interface LegalPageProps {
  view: string;
}

export const LegalPages: React.FC<LegalPageProps> = ({ view }) => {
  const containerClass = "max-w-4xl mx-auto px-4 py-16 text-gray-800 min-h-[60vh]";
  const headingClass = "text-3xl font-bold mb-6 text-brand-dark border-b-2 border-brand-yellow inline-block pb-2";
  const sectionClass = "mb-6";
  const subHeadingClass = "text-xl font-bold mb-3 mt-4 text-gray-700";
  const textClass = "mb-4 leading-relaxed text-sm md:text-base";

  if (view === 'privacy') {
    return (
      <div className={containerClass}>
        <h1 className={headingClass}>Privacy Policy</h1>
        <div className={sectionClass}>
          <p className={textClass}>At 6000+ Viral Reel Bundle, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website digitalproductwalapmedia.vercel.app.</p>
          
          <h2 className={subHeadingClass}>1. Information We Collect</h2>
          <p className={textClass}>We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, place an order, and in connection with other activities, services, features or resources we make available on our Site.</p>
          
          <h2 className={subHeadingClass}>2. How We Use Collected Information</h2>
          <p className={textClass}>We may use the information we collect to improve customer service, process transactions, and send periodic emails regarding your order or other products and services.</p>
          
          <h2 className={subHeadingClass}>3. Data Protection</h2>
          <p className={textClass}>We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information.</p>
        </div>
      </div>
    );
  }

  if (view === 'terms') {
    return (
      <div className={containerClass}>
        <h1 className={headingClass}>Terms & Conditions</h1>
        <div className={sectionClass}>
          <h2 className={subHeadingClass}>1. Introduction</h2>
          <p className={textClass}>These Website Standard Terms and Conditions written on this webpage shall manage your use of our website. By using our Website, you accepted these terms and conditions in full.</p>

          <h2 className={subHeadingClass}>2. Intellectual Property Rights</h2>
          <p className={textClass}>Other than the content you own, under these Terms, digitalproductwalapmedia and/or its licensors own all the intellectual property rights and materials contained in this Website. You are granted limited license only for purposes of viewing the material contained on this Website.</p>

          <h2 className={subHeadingClass}>3. Restrictions</h2>
          <p className={textClass}>You are specifically restricted from all of the following: publishing any Website material in any other media; selling, sublicensing and/or otherwise commercializing any Website material; publicly performing and/or showing any Website material.</p>
          
          <h2 className={subHeadingClass}>4. Limitation of Liability</h2>
          <p className={textClass}>In no event shall digitalproductwalapmedia, nor any of its officers, directors and employees, be held liable for anything arising out of or in any way connected with your use of this Website.</p>
        </div>
      </div>
    );
  }

  if (view === 'refund') {
    return (
      <div className={containerClass}>
        <h1 className={headingClass}>Refund Policy</h1>
        <div className={sectionClass}>
          <p className={textClass}>Thank you for buying our products. We ensure that our users have a rewarding experience while they discover, assess, and purchase our courses, bundles, and digital products.</p>
          
          <h2 className={subHeadingClass}>1. Digital Products</h2>
          <p className={textClass}>Since the package includes digital files and instant access to downloadable content, <strong>we generally do not offer refunds</strong> once the purchase is made and the files have been accessed or downloaded.</p>
          
          <h2 className={subHeadingClass}>2. Exceptional Circumstances</h2>
          <p className={textClass}>However, if you face technical issues where you are unable to access the files despite our support team's assistance, we may consider a refund request within 24 hours of purchase.</p>

          <h2 className={subHeadingClass}>3. Contact Us</h2>
          <p className={textClass}>If you have any questions about our Returns and Refunds Policy, please contact us at parthpatelb46@gmail.com.</p>
        </div>
      </div>
    );
  }

  if (view === 'about') {
    return (
      <div className={containerClass}>
        <h1 className={headingClass}>About Us</h1>
        <div className={sectionClass}>
          <p className={textClass}>Welcome to the 6000+ Viral Reel Bundle platform. We are a dedicated team of digital creators and marketers passionate about helping others succeed in the social media space.</p>
          <p className={textClass}>Our mission is to provide high-quality, ready-to-use content that empowers content creators, influencers, and business owners to grow their online presence without the stress of constant content creation.</p>
          <p className={textClass}>With our curated bundles, we aim to save you time and money while maximizing your engagement and reach.</p>
        </div>
      </div>
    );
  }

  if (view === 'contact') {
    return (
      <div className={containerClass}>
        <h1 className={headingClass}>Contact Us</h1>
        <div className={sectionClass}>
          <p className={textClass}>Have questions? We are here to help you. Reach out to us through any of the following channels:</p>
          
          <div className="bg-gray-100 p-6 rounded-xl mt-8 space-y-6">
            <div className="flex items-center gap-4">
                <div className="bg-brand-pink text-white p-3 rounded-full">
                    <Mail size={24} />
                </div>
                <div>
                    <h3 className="font-bold text-gray-900">Email Us</h3>
                    <p className="text-gray-600">parthpatelb46@gmail.com</p>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <div className="bg-brand-pink text-white p-3 rounded-full">
                    <Phone size={24} />
                </div>
                <div>
                    <h3 className="font-bold text-gray-900">Call Us</h3>
                    <p className="text-gray-600">+91 6353281799</p>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <div className="bg-brand-pink text-white p-3 rounded-full">
                    <MapPin size={24} />
                </div>
                <div>
                    <h3 className="font-bold text-gray-900">Location</h3>
                    <p className="text-gray-600">Gujarat, India</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};