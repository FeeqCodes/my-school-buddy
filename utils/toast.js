import { toast } from "react-toastify";

export const withToast = (promise) => {
  toast.promise(
    promise,
    {
      pending: {
        render() {
          return (
            <div className="p-6 py-2">
              <p className="mb-2">uploading</p>
            </div>
          );
        },
        icon: false,
      },
      success: {
        render({ data }) {
          return (
            <div>
              
               
              <p>Has been successfully processed.</p>
              
            </div>
          );
        },
        // other options
        icon: "🟢",
      },
      error: {
        render({ data }) {
          // When the promise reject, data will contains the error
          return <div>{data.message ?? "Transaction has failed"}</div>;
        },
      },
    },
    {
      closeButton: true,
    }
  );
};
