<diff path="src/components/EmergencyBanner.tsx">
--- a/src/components/EmergencyBanner.tsx
+++ b/src/components/EmergencyBanner.tsx
@@ -6,7 +6,7 @@
 export const EmergencyBanner = ({ phoneNumber }: EmergencyBannerProps) => (
   <a 
     href={`tel:${phoneNumber}`} 
-    className="block bg-red-600 text-white py-2 px-4 text-center hover:bg-red-700 transition-colors"
+    className="block bg-red-600 text-white py-2 px-4 text-center hover:bg-red-700 transition-colors"
   >
     <p className="text-sm md:text-base">
       Click here to call {phoneNumber}
    </p>
   </a>
 );
    </diff>
