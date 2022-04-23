import { useState } from "react";
import { t } from "../i18n";
import { trash } from "./icons";
import { ToolButton } from "./ToolButton";

import classes from "./ClearCanvas.module.scss";

interface ClearCanvasDialogProps {
  onConfirm: () => void;
  onCancel: () => void;
}

const ClearCanvasDialog = ({ onConfirm, onCancel }: ClearCanvasDialogProps) => {
  return (
    <div className={`ClearCanvasDialog ${classes.dialog}`}>
      <div className={`ClearCanvasDialog__header ${classes.header}`}>
        <span className={`ClearCanvasDialog__headerText ${classes.headerText}`}>
          Clear Canvas
        </span>
        <button
          className={`ClearCanvasDialog__closeButton ${classes.closeButton}`}
          onClick={onCancel}
        >
          X
        </button>
      </div>
      <span className={`ClearCanvasDialog__bodyText ${classes.bodyText}`}>
        This will clear the whole canvas. Are you sure?
      </span>
      <div
        className={`ClearCanvasDialog__buttonContainer ${classes.buttonContainer}`}
      >
        <button
          className={`ClearCanvasDialog__cancel ${classes.cancel}`}
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
          className={`ClearCanvasDialog__confirm ${classes.confirm}`}
          onClick={onConfirm}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

const ClearCanvas = ({ onConfirm }: { onConfirm: () => void }) => {
  const [showDialog, setShowDialog] = useState(false);
  const toggleDialog = () => {
    setShowDialog(!showDialog);
  };

  return (
    <>
      <ToolButton
        type="button"
        icon={trash}
        title={t("buttons.clearReset")}
        aria-label={t("buttons.clearReset")}
        // showAriaLabel={useDeviceType().isMobile}
        onClick={toggleDialog}
        data-testid="clear-canvas-button"
      />

      {showDialog && (
        <ClearCanvasDialog
          onConfirm={() => {
            onConfirm();
            toggleDialog();
          }}
          onCancel={toggleDialog}
        />
      )}
    </>
  );
};

export default ClearCanvas;
