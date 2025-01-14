<diff path="src/components/QuickContactBar.tsx">
--- a/src/components/QuickContactBar.tsx
+++ b/src/components/QuickContactBar.tsx
@@ -7,7 +7,7 @@
 }
 
 export const QuickContactBar = ({ phoneNumber }: QuickContactBarProps) => {
-  const formattedPhone = `0 (800) ${phoneNumber.split('-')[1]} ${phoneNumber.split('-')[2]}`;
+  const formattedPhone = `(404) 647-2863`;
   
   return (
     <div className="bg-gradient-to-r from-red-600 via-red-600 to-black">
@@ -18,7 +18,7 @@
           </div>
           
           <div className="text-2xl font-bold mb-4 md:mb-0 text-white">
-            {phoneNumber}
+            {formattedPhone}
           </div>
           
           <div className="flex items-center">
    </diff>
