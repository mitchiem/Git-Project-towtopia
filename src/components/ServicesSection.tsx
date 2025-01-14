<diff path="src/components/ServicesSection.tsx">
--- a/src/components/ServicesSection.tsx
+++ b/src/components/ServicesSection.tsx
@@ -24,7 +24,7 @@
           size="lg" 
           variant="destructive"
           className="text-xl font-semibold px-8 py-6 h-auto"
-          onClick={() => window.location.href = `tel:${phoneNumber}`}
+          onClick={() => window.location.href = `tel:(404) 647-2863`}
         >
           <Phone className="mr-2 h-6 w-6" />
           Call Now For Immediate Help
@@ -50,7 +50,7 @@
               </ul>
             </CardContent>
             <CardFooter>
-              <Button className="w-full" onClick={() => window.location.href = `tel:${phoneNumber}`}>
+              <Button className="w-full" onClick={() => window.location.href = `tel:(404) 647-2863`}>
                 Call Now
               </Button>
             </CardFooter>
    </diff>
