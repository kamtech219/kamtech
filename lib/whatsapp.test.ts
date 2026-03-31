import { whatsappMessages, getWhatsAppLink, openWhatsAppChat, WHATSAPP_PHONE } from './whatsapp.ts';
import assert from 'node:assert';
import test, { describe, it } from 'node:test';

describe('WhatsApp Utilities', () => {
  it('getWhatsAppLink should return the correct URL for each message key', () => {
    for (const key in whatsappMessages) {
      const messageKey = key as keyof typeof whatsappMessages;
      const expectedMessage = encodeURIComponent(whatsappMessages[messageKey]);
      const expectedLink = `https://wa.me/${WHATSAPP_PHONE}?text=${expectedMessage}`;
      const actualLink = getWhatsAppLink(messageKey);

      assert.strictEqual(actualLink, expectedLink, `Failed for key ${messageKey}`);
    }
  });

  it('openWhatsAppChat should call window.open with the correct arguments', () => {
    // Mock window
    const originalWindow = (global as any).window;
    let openedUrl = "";
    let openedTarget = "";

    const mockOpen = (url: string, target: string) => {
      openedUrl = url;
      openedTarget = target;
      return null;
    };

    (global as any).window = {
      open: mockOpen
    };

    try {
      const key: keyof typeof whatsappMessages = 'auditGratuit';
      openWhatsAppChat(key);

      assert.strictEqual(openedTarget, "_blank", "Expected target _blank");

      const expectedUrl = getWhatsAppLink(key);
      assert.strictEqual(openedUrl, expectedUrl, "Expected correct WhatsApp URL");
    } finally {
      (global as any).window = originalWindow;
    }
  });

  it('openWhatsAppChat should do nothing when window is undefined', () => {
    const originalWindow = (global as any).window;
    delete (global as any).window;

    try {
      // Should not throw
      openWhatsAppChat('auditGratuit');
    } finally {
      (global as any).window = originalWindow;
    }
  });
});
