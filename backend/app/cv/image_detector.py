import cv2
import numpy as np

def detect_environment_areas(image_path):

    image = cv2.imread(image_path)

    hsv = cv2.cvtColor(
        image,
        cv2.COLOR_BGR2HSV
    )

    # =========================
    # VEGETATION
    # =========================

    lower_green = np.array([35, 40, 40])
    upper_green = np.array([90, 255, 255])

    green_mask = cv2.inRange(
        hsv,
        lower_green,
        upper_green
    )

    # =========================
    # WATER
    # =========================

    lower_blue = np.array([90, 50, 50])
    upper_blue = np.array([140, 255, 255])

    blue_mask = cv2.inRange(
        hsv,
        lower_blue,
        upper_blue
    )

    # =========================
    # FIRE
    # =========================

    lower_red = np.array([0, 120, 120])
    upper_red = np.array([20, 255, 255])

    red_mask = cv2.inRange(
        hsv,
        lower_red,
        upper_red
    )

    # =========================
    # PIXEL COUNTS
    # =========================

    vegetation_pixels = cv2.countNonZero(green_mask)
    water_pixels = cv2.countNonZero(blue_mask)
    fire_pixels = cv2.countNonZero(red_mask)

    # =========================
    # DRAW CONTOURS
    # =========================

    contours, _ = cv2.findContours(
        red_mask,
        cv2.RETR_EXTERNAL,
        cv2.CHAIN_APPROX_SIMPLE
    )

    cv2.drawContours(
        image,
        contours,
        -1,
        (0, 0, 255),
        3
    )

    output_path = image_path.replace(
        ".jpg",
        "_processed.jpg"
    )

    cv2.imwrite(
        output_path,
        image
    )

    return {
        "vegetation_pixels": int(vegetation_pixels),
        "water_pixels": int(water_pixels),
        "fire_pixels": int(fire_pixels),
        "processed_image": output_path
    }