<diff path="src/components/Footer.tsx">
--- a/src/components/Footer.tsx
+++ b/src/components/Footer.tsx
@@ -10,7 +10,7 @@
         <div>
           <h3 className="text-xl font-bold mb-4">Contact Us</h3>
           <p className="mb-2">24/7 Emergency Service</p>
-          <p className="mb-2">Phone: {phoneNumber}</p>
+          <p className="mb-2">Phone: {(typeof phoneNumber === 'string' ? phoneNumber : '')}</p>
           <p>Email: info@towingservice.com</p>
         </div>
         <div>
    </diff>
