import PropTypes from "prop-types";
import React from "react";
import Skeleton from "react-loading-skeleton";

const MyIcon = ({ iconName, size = "24px", ...props }) => {
  if (!iconName) {
    console.error("Error: iconName is required.");
    return null;
  }

  const IconComponent = React.lazy(() =>
    import(`../assets/icons/${iconName}.svg?react`)
  );

  return (
    <React.Suspense
      fallback={
        <div>
          <Skeleton
            circle={true}
            width={`${size}px`}
            height={`${size}px`}
            className="bg-gray-800 animate-bounce"
          />
        </div>
      }
    >
      <IconComponent width={size} height={size} {...props} />
    </React.Suspense>
  );
};

export default MyIcon;

MyIcon.propTypes = {
  iconName: PropTypes.string.isRequired,
  size: PropTypes.string,
};
