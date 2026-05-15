import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

const ClientSubmit = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-16 px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">
              Staff Follow-Up Trigger
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Internal form for Joan and staff to fill in after a grooming appointment. Enter the customer's name and number to automatically trigger the review funnel and 1-year follow-up sequence.
            </p>
          </div>
          
          <div className="bg-card rounded-xl p-4 md:p-8 shadow-sm border border-border">
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/9KtZ91fYWbCmhXwggLUi"
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                borderRadius: "4px",
                minHeight: "804px",
              }}
              id="inline-9KtZ91fYWbCmhXwggLUi"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Client Review + 1 Year Followup Sequence Form"
              data-height="804"
              data-layout-iframe-id="inline-9KtZ91fYWbCmhXwggLUi"
              data-form-id="9KtZ91fYWbCmhXwggLUi"
              title="Client Review + 1 Year Followup Sequence Form"
            ></iframe>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ClientSubmit;
