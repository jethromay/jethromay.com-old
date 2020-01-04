export const GA_TRACKING_ID = 'UA-131802537-1';

export const trackPageView = url => {
    window.gtag('config', GA_TRACKING_ID, {
        page_path: url,
    })
};

export const trackEvent = ({ action, category, label, value }) => {
    window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
    })
};
