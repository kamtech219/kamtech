import "../../setup_jsdom.ts";
import test, { describe, it } from "node:test";
import assert from "node:assert";
import { renderHook, act, fireEvent } from "@testing-library/react";
import { useMousePosition } from "./use-mouse-position.ts";

describe("useMousePosition Hook", () => {
    it("should initialize with x: 0, y: 0", () => {
        const { result } = renderHook(() => useMousePosition());
        assert.deepStrictEqual(result.current, { x: 0, y: 0 });
    });

    it("should update state when mousemove event is triggered", () => {
        const { result } = renderHook(() => useMousePosition());

        act(() => {
            fireEvent.mouseMove(window, { clientX: 250, clientY: 350 });
        });

        assert.deepStrictEqual(result.current, { x: 250, y: 350 });
    });

    it("should update state correctly with multiple mousemoves", () => {
        const { result } = renderHook(() => useMousePosition());

        act(() => {
            fireEvent.mouseMove(window, { clientX: 100, clientY: 150 });
        });
        assert.deepStrictEqual(result.current, { x: 100, y: 150 });

        act(() => {
            fireEvent.mouseMove(window, { clientX: 500, clientY: 600 });
        });
        assert.deepStrictEqual(result.current, { x: 500, y: 600 });
    });

    it("should clean up event listener on unmount", () => {
        let removeEventListenerCalled = false;
        const originalRemoveEventListener = window.removeEventListener;

        window.removeEventListener = function(type: string, listener: any, options?: any) {
            if (type === "mousemove") {
                removeEventListenerCalled = true;
            }
            return originalRemoveEventListener.call(this, type, listener, options);
        };

        const { unmount } = renderHook(() => useMousePosition());

        unmount();

        assert.ok(removeEventListenerCalled, "Cleanup should call window.removeEventListener for mousemove");

        // Restore
        window.removeEventListener = originalRemoveEventListener;
    });
});
