//% weight=100 color=#0fbc11 icon="\uf205" block="Middle LED Control"
namespace MiddleLED {
    /**
     * Light up the middle LED on the micro:bit
     */
    //% block="light up middle LED"
    export function lightUpMiddle(): void {
        led.plot(2, 2); // Turn on the middle LED (row 2, column 2)
    }

    /**
     * Turn off the middle LED on the micro:bit
     */
    //% block="turn off middle LED"
    export function turnOffMiddle(): void {
        led.unplot(2, 2); // Turn off the middle LED (row 2, column 2)
    }
}
