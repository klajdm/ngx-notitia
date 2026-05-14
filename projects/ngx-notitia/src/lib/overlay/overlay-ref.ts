import { ComponentRef } from '@angular/core';
import { BasePortalHost, ComponentPortal } from '../portal/portal';

/**
 * Reference to an overlay that has been created with the Overlay service.
 * Used to manipulate or dispose of said overlay.
 */
export class OverlayRef {
  constructor(
    private _portalHost: BasePortalHost,
    private _cleanup?: () => void,
  ) {}

  attach(portal: ComponentPortal<unknown>, newestOnTop = true): ComponentRef<unknown> {
    return this._portalHost.attach(portal, newestOnTop);
  }

  /**
   * Detaches an overlay from a portal.
   * @returns Resolves when the overlay has been detached.
   */
  detach() {
    const result = this._portalHost.detach();
    this._cleanup?.();
    return result;
  }
}
